import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
// import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light');//check whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{

    setAlert({

      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  } 

  const removeBodyClasses=()=>{
     document.body.classList.remove('bg-dark')  
     document.body.classList.remove('bg-light') 
     document.body.classList.remove('bg-warning') 
     document.body.classList.remove('bg-danger') 
     document.body.classList.remove('bg-success') 
  }

  const toggleMode =(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
  //  if (mode === 'light' ){
  //   //  setMode('dark');
  //   //  document.body.style.backgroundColor='#042723';
  //    showAlert("Dark mode has been enabled",'success');
  //   //  document.title= "TextUtils - Dark"; want to change title when unnable dark mode
  //   }
  //   else{
  //     // setMode('light');
  //     // document.body.style.backgroundColor='white';
  //     showAlert("Light mode has been enabled",'success');

  //   }
 }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText= "About TextUtils"/>  */}
    {/* <Navbar /> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
      <Route path="/about" ><About mode={mode} /></Route>
      <Route path="/"><TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/></Route>
    </Switch>

      
      
    </div>
    </Router>
   
    </>
    
 
  );
}

export default App;
