import './App.css'; 
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} aboutText="about TextUtils" />
        <Alert alert={alert} />
        <Routes>
            <Route exact path="/about" element={<div className='container my-3'>  <About mode={mode} togglemode={toggleMode}/> </div>} />
            <Route exact path="/" element= {<Textform heading="Enter your Text" mode={mode} showalert={showAlert} summary="Your Text Summary" preview="Summary" />}/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
