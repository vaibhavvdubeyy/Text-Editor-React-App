import React, {useState} from 'react';


export default function TextForm() {
    const handleUpClick =()=>{
        //console.log("Uppercase was clicked!"+text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleDnClick =()=>{
      //console.log("Uppercase was clicked!"+text);
      let newText=text.toLowerCase();
      setText(newText)
    }
    const handleClearClick =()=>{
      //console.log("Uppercase was clicked!"+text);
      let newText='';
      setText(newText)
    }
    const handleMagicClick =()=>{
      //console.log("Uppercase was clicked!"+text);
      let newText=text.padStart;
      setText(newText)
    }

    const handleOnChange =(event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter Text Here!');


  return (
    <>
    <div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Come on write Something!</label>
        <textarea class="form-control" value ={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
     </div>
     <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
     <button className="btn btn-primary mx-1" onClick={handleDnClick}>Convert to LowerCase</button>
     <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear this up!</button>
     <button className="btn btn-primary mx-1" onClick={handleMagicClick}>Magic</button>
    </div>
    <div className='container my-3'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </> 
  );
}
 