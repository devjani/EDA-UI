import React,{ useState } from 'react';
import { Typography } from '@mui/material';
import Grid from "@mui/material/Grid2";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BookIcon from '@mui/icons-material/AutoStories';
import WorkIcon from '@mui/icons-material/Work';
import TimeLineIcon from '@mui/icons-material/Timeline';
import CardComponent from './Card'
import FileUpload from './FileUpload'
import UploadDatasetDialog from './UploadDatasetDialog';
const Dashboard = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
    const handleFileSelect = (file) => {
        console.log('Selected file:', file);
        // Handle file upload logic here
      };
    return (
        <div style={{ color: '#fff' }}>
             {/* <Button variant="outlined" onClick={handleOpenDialog}>
        Open Dialog
      </Button> */}
            <Typography variant="h4" gutterBottom>Dashboard</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <CardComponent clickEvent={handleOpenDialog} icon={AddIcon} title='Add Dataset' content='Visualize and manage your data.' />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardComponent icon={BookIcon} title='Notebooks' content='Create and manage your Jupyter notebooks.' />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardComponent icon={WorkIcon} title='Training Jobs' content='Train your machine learning models.' />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardComponent icon={TimeLineIcon} title='Endpoints' content='Deploy and manage your models.' />
                </Grid>
            </Grid>
            <UploadDatasetDialog open={isDialogOpen} handleClose={handleCloseDialog} />
        </div>
    );
};

export default Dashboard;
