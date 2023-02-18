import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridSelectionModel} from '@mui/x-data-grid';
import { serverCalls} from '../../api';
import { useGetData } from '../../custom-hooks'
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle

} from '@mui/material'
import { HeroForm } from '../HeroForm'


interface GridData {
  data:{
    id?:string
  }
}

const columns: GridColDef[] = [

  {   field: 'id', 
      headerName: 'ID', 
      width: 90},
    
    {
      field: 'name',
      description: 'Description',
      width: 150,
      editable: true
  },
  {
      field: 'description',
      description: 'Description',
      width: 150,
      editable: true
  }
  
  
  
];


export const DataTable= () => {
  let { heroData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    serverCalls.delete(`${gridData[0]}`)
    getData()
  }

  console.log(gridData)
  // Conditional to render Datatable only for authenticated users
  if (localStorage.getItem('myAuth') == 'true'){

    return (
        <Box sx={{ height: 400, width: '100%'}}>
          <h2> Custom your Hero</h2>
          <DataGrid
            rows={heroData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onSelectionModelChange={(newSelectionModel) => {setData(newSelectionModel)}}
            {...heroData}
          />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update your Hero</DialogTitle>
          <DialogContent>
            <DialogContentText>Hero id: {gridData[0]}</DialogContentText>
              <HeroForm id={`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
        </Box>
      )} else {
        return ( // does not render data table if user is not authenticated
        <div>
          <h3>Please Sign In to View Your Hero Collection</h3>
        </div>)
      }
    }