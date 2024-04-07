// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import {useState} from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// let name = 'Shivam';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (nessage, type) => {
    setAlert({
      message: nessage,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      // document.getElementById('myBox').style.backgroundColor = 'grey';
      showAlert("Dark mode has been update successfully.", "success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been update successfully.", "success")
      // document.getElementById('myBox').style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze:" modes={mode} showAlert={showAlert}/>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
