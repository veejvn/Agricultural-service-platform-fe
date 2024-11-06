import React from 'react';
import { ConfigProvider, App as AntApp } from 'antd';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Router from '@app/Router';
import useInitialApp from '@hooks/useInitialApp';
import "./tailwind.css";
import "./global.css";

function App() {
  useInitialApp()
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
