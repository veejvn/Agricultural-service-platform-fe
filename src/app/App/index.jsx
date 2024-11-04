import React from 'react';
import { ConfigProvider, App as AntApp } from 'antd';
import Router from '@app/Router';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import "./tailwind.css";
import "./global.css";

function App() {
  return (
    <ConfigProvider>
      <AntApp>
        <Router></Router>
        <ToastContainer />
      </AntApp>
    </ConfigProvider>
  )
}

export default App
