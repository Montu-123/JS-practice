import React, { useState } from 'react'

export default function Textarea(props) {
  const [myStyle, setmyStyle] = useState({
    color: 'black',
    backgroundColor: ' white'
  })
  const [btntext, setBtnText] = useState("Enable Dark Mode")

  const toggleStyle = ()=> {
    if(myStyle.color === 'black'){
      setmyStyle({
        color: 'white',
        backgroundColor: ' black'
      })
      setBtnText("Enable Light Mode")
    }
    else{
      setmyStyle({
      color: 'black',
      backgroundColor: ' white'
    })
    setBtnText("Enable Dark Mode");
    }
  }

  const handeUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const handleClearClick = () => {
    setText("");
  }

  const [text, setText] = useState('Enter text here');
  return (
    <>
      <div className="container" style={myStyle}>
      <h2 className="my-3" >{props.heading}</h2>
      <div className="mb-3">
        {/* <h1>Enter the text below</h1> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="7"></textarea>
        <button className="btn btn-primary" onClick={handeUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear text</button>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <div class="form-check form-switch">{btntext}
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleStyle}/>
</div>
      </div>
      </div>
    </>
  )
}
