import React,{useState} from 'react'




export default function TextForm(props) {
 
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        // setText("you have clicked on handleUpClick");
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase!",'success');
    }
    const handleLoClick = ()=>{
        
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to lowercase!",'success');
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);//we can update in text by using event 
    }
    const download =()=>{
        var hiddenElement = document.createElement('a');

        hiddenElement.href = 'data:attachment/text,' + encodeURI(text);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'myFile.txt';
        hiddenElement.click();
}
 

 
    const[text,setText]= useState("");
    // setText("new text");  correct way to change hook.
  return (
      <>
    <div className='container'  >
        <h1 style={{color : props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control"  id="myBox" value={text}  onChange={handleOnChange} rows="8"></textarea>
      </div>
       <button className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-3 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-3 my-1" id="download" onClick={download}>Download file</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1 >Your text summary</h1>
        <p >{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
        <p >can read in {0.008 * text.split(" ").length} minutes</p>
        <h2 >Preview</h2>
        <p >{text.length>0?text:"Enter something in the above textbox"}</p>
        
    </div>
    </>
  )
}
