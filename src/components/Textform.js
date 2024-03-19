import React, { useState } from "react"

export default function Textform(props){
    const [text,setText]=useState("");

    const handleUpclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Upper Case","success")
    }

    const handleLoclick=()=>{
        let newText=text.toLocaleLowerCase();
        setText(newText);
        props.showalert("Converted to Lower Case","success");
    }

    const clearclick=()=>{
        let newText="";
        setText(newText);
        props.showalert("Text Cleared","success");
    }

    const handletextChange=(event)=>{
        setText(event.target.value);
    }

    const countWords=(text)=>{
        if(!text){
            return 0;
        }
        return text.trim().split(/\s+/).filter((word)=>word!=="").length;
    }

    const extraspaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert("Extra Spaces cleared","success");
    }

    return(
        <>
            <div className="container my-5" style={{color: props.mode==='dark'?'white':'#042743'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text}  onChange={handletextChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="4" placeholder="Enter Text to Evaulate"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={clearclick}>Clear</button>
                <button className="btn btn-primary mx-2 my-2" onClick={extraspaces}>Clear Extra Spaces</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h3>{props.summary}</h3>
                <p>{countWords(text)} words & {text.length} characters</p>
                <h4>{props.preview}</h4>
                <p>{text.length>0?text:"Enter Something to Preview Here"}</p>
            </div>
        </>
    )

}
