import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { mydatastore } from './assets/Mydatastore/Datastore';
import Home from './MyComponents/MainLayout';
import Services from './MyComponents/Services';
import Contact from './MyComponents/ContactForm';
import Error from"./MyComponents/Errorpage";
import Setting from'./MyComponents/Settingpage';
import Login from'./MyloginRegisterpage/Login';
import Mytech from'./MyComponents/Mytech';
import Myproduct from'./Myproduct/Product';
import "./App.css";
import MainLayout from'./MyComponents/MainLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={mydatastore}>
          <Routes>
          <Route path='main' element={<Mytech />} />
            <Route path='homepage' element={<Home />} />
            <Route path='' element={<Login />} />
            <Route path='/services' element={<Services />} />
            <Route path='layout' element={<MainLayout />} />
            <Route path='product' element={<Myproduct/>} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/error'element={<Error />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

