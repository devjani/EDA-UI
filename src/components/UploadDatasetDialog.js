import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Stepper, Step, StepLabel, TextField } from '@mui/material';
// import * as XLSX from 'xlsx';

const UploadDatasetDialog = ({ open, handleClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState([]);

  const steps = ['Upload File', 'File Details'];

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (evt) => {
    //   const bstr = evt.target.result;
    //   const wb = XLSX.read(bstr, { type: 'binary' });
    //   const wsname = wb.SheetNames[0];
    //   const ws = wb.Sheets[wsname];
    //   const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
    //   setFileData(data.slice(0, 6)); // Display first 5 rows + header
    };
    reader.readAsBinaryString(selectedFile);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderFileUpload = () => (
    <DialogContent>
      <input type="file" accept=".xlsx,.csv" onChange={handleFileUpload} />
      {fileData.length > 0 && (
        <table>
          <thead>
            <tr>
              {fileData[0].map((cell, index) => (
                <th key={index}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fileData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DialogContent>
  );

  const renderFileDetails = () => (
    <DialogContent>
      <TextField label="File Name" value={file ? file.name : ''} fullWidth margin="normal" />
      <TextField label="File Size" value={file ? `${(file.size / 1024).toFixed(2)} KB` : ''} fullWidth margin="normal" />
      {/* Add more file details as needed */}
    </DialogContent>
  );

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>Next-Next Dialog</DialogTitle>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 ? renderFileUpload() : renderFileDetails()}
      <DialogActions>
        {activeStep !== 0 && (
          <Button onClick={handleBack}>
            Back
          </Button>
        )}
        <Button
          onClick={activeStep === steps.length - 1 ? handleClose : handleNext}
          color="primary"
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadDatasetDialog;
