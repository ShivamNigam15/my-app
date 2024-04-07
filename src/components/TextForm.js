import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Text has been converted to UPPERCASE.", "success");
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Text has been converted to lowercase.", "success");
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text has been cleared.", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("")
    return (
        <>
        <div className="container" style={{color:props.modes === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder="Enter your text" style={{backgroundColor: props.modes === 'dark'? 'grey': 'white', color: props.modes === 'dark'? 'white': '#042743'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color:props.modes === 'dark'?'white':'#042743'}}>
            <h2 c>Your text Summary</h2>
            <p>{text.trim().length === 0 ? 0 : text.trim().split(" ").length} words and {text.trim().length} characters</p>
            <p>{0.008 * text.trim().split(" ").length} Minutes read</p>
            <h2>Preview:</h2>
            <p>{text.length>0?text:'Enter some text to preview...'}</p>
        </div>
        </>
    )
}
