import React, {useState} from "react";
import { Drawer as MUIDrawer,
    ListItem, 
    List, 
    ListItemText,
    ListItemButton, 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    CssBaseline, 
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronRight,ChevronLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Theme/theme";
import { DataTable } from '../DataTable';
import { HeroForm } from '../HeroForm'; 


const drawerWidth = 200;

const myStyles = {
    appBar : {
          background: "#2E3B55",
          color: "white",
          transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
          
        }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      background: "#2E3B55",
      color: "white"
    },
    drawerHeader: {
      display: 'flex',
      width: drawerWidth,
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    toolbar:{
      display: 'flex',
      background: "#2E3B55"
    },
    toolbarButton: {
      marginLeft: 'auto',
      background: "#4A618E",
      color: "white",
      "&:hover": {
      background: "#2E3B55"
    }
  }

};





export const Dashboard = () => {
    
    const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const itemsList = [
    {
      text: 'Home',
      onClick: () => navigate('/')
    },
    {
      text: 'Sign In',
      onClick: () => navigate('/signin')
    }
  ]



return (
      <Box sx={{display:'flex'}} >
        <CssBaseline />
        <AppBar
          sx={open ? myStyles.appBarShift : myStyles.appBar } 
          position="fixed"
        >
          <Toolbar sx={myStyles.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={ open ? myStyles.hide : myStyles.menuButton }
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap> Marvel Collection</Typography>
            <Button sx={ myStyles.toolbarButton } onClick={handleDialogOpen}>Custom or Purchase</Button>

            {/* Dialog Pop up for Create a new Drone */}
            <Dialog open={dialogOpen} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Add A Hero</DialogTitle>
                <DialogContent>
                  <DialogContentText>Add a new Hero</DialogContentText>
                      <HeroForm/>
                </DialogContent>
                <DialogActions>
                    <Button onClick = {handleDialogClose} color="primary">Cancel</Button>
                </DialogActions>
                </Dialog>

          </Toolbar>
        </AppBar>
        <MUIDrawer
          sx={open ? myStyles.drawer : myStyles.hide}
          variant="persistent"
          anchor="left"
          open={open}
          style={{width:drawerWidth}}
        >
          <Box
            sx={myStyles.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
              </IconButton>
          </Box>
          <Divider />
          <List>
          {itemsList.map((item, index) => {
            const { text, onClick } = item;
            return (
              <ListItemButton key={text} onClick={onClick}>
                <ListItemText primary={text} />
              </ListItemButton>
            );
          })}
          </List>
        </MUIDrawer>
        <Box sx={ myStyles.content } >
          <Box sx={ myStyles.drawerHeader }/>
  
          <DataTable />
          <h1></h1>
          {/* <DataTable /> We will add this shortly*/}
         
        </Box>
      </Box>
      )
  };
    
