import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const FileUpload = ({ onFileSelect }) => {
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    onFileSelect(file);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Upload Excel/CSV
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload File</DialogTitle>
        <DialogContent>
          <Button variant="contained" component="label">
            Select File
            <input type="file" hidden onChange={handleFileChange} accept=".csv, .xlsx, .xls" />
          </Button>
          <TextField
            margin="dense"
            value={fileName}
            label="Selected File"
            fullWidth
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FileUpload;
