// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      // body.style.backgroundColor=
    }
    else{
      setMode('light');
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils" />
      <div className='container'>
        <TextForm heading="Enter the text to analyze"/>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
