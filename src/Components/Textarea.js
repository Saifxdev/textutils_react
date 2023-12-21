 import React,{useState} from 'react' 
 
 

 export default function Textarea(props){

     const handleUpClick=()=>{
         console.log("upper case clicked" + text);
         let newText=text.toUpperCase();
         setText(newText)
        props.showAlert("Converted in  Uppercase!","Sucess");
     }
     const handleLoClick=()=>{
        console.log("upper case clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted in lowercase!","Sucess");
    }
    const handleClearClick=()=>{
        console.log("upper case clicked" + text);
        let newText=" ";
        setText(newText)
        props.showAlert("Text cleared!","Sucess");

    }
      
    const handleCopy=()=>{
        console.log("i copy everthing");
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied on clipboard!","Sucess");
    }

    const handleSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("spaces removed sucessfully:","sucess");
    }
     const handleOnChange= (event)=>{
         console.log("changed");
         setText(event.target.value)
     }

     const [text,setText]=useState(' ');
     // setText("hello");

     return(
          <>
            
       <div className='container'style={{color:props.mode==='dark'?'white':' #042743'}}>
           <h1>{props.heading}</h1>
           <div className='mb-3'>
               <textarea className='form-control' value={text} onChange={handleOnChange} id="mybox" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':' #042743'}} rows="9"></textarea>
           </div>
           <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}> convert to uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}> convert to lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}> clear text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}> Copy text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleSpace}> Remove extra-space</button>
            <h2>Text Summary</h2>
           <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charcters </p>
              </div>
          <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
              <h2>Preview</h2>
              <p>{text.length>0?text:"Enter text in Textfield to get preview here"}</p>
          </div>
          </>
     )
 }