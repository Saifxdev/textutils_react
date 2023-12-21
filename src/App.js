import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import React ,{ useState } from 'react';
import Alert from './Components/Alert';
import  About from './Components/About';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(massage,type)=>{
setAlert({
  msg:massage,
  type:type
})
setTimeout(()=>{
 setAlert(null);
},3000)
  }
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
     document.body.style.backgroundColor="#042743";
     setInterval(()=>{
         document.title="";
     },2000);
     setInterval(()=>{
      document.title="";
  },1500);
  showAlert("dark mode enabled!","sucess");
 }
    else{
      setMode('light');
     document.body.style.backgroundColor="white";
  showAlert("white mode enabled!","sucess");
    }
  }
  return (
     <>
       <Router> 
       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
        <div className='container my-3'> 
        <Routes> 
        <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Textarea heading="Enter your text"  mode={mode} showAlert={showAlert}/>}/>
   </Routes>
         </div>
         </Router>
       </>
  );
}

export default App;
