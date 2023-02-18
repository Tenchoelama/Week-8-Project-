import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "@mui/material/styles"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './Theme/theme'
import { Provider } from 'react-redux';
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/auth';
//internal imports
import { firebaseConfig } from './firebaseConfig';
import { store } from './redux/store';
import { Home, Dashboard, SignIn, SignUp} from './components';
import './style.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Provider store = {store}>
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
    <Route path ='/' element={<Home title={'Marvel Collection'}/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    
    </Routes>
    </Router>
    </ThemeProvider>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>
);