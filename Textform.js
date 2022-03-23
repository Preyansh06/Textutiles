import React, {useState} from 'react'

export default function Textform(props) {
    const textupdateUp=() =>{
        // console.log("Upper case letters")
        let newtext= text.toUpperCase();
        settext(newtext);
    }
    const textupdateDown=() =>{
        let newtext= text.toLowerCase();
        settext(newtext);
    }
    const handletextclear =() =>{
        let newtext= '';
        settext(newtext);
    }
    // youtube comment fuctions(video-9)-----------------------------------------------------------
    const handleExtract =()=>{
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        const res1 = letters.join('');
        settext(res1)
        }; 
    const textonchange=(event)=>{
        settext(event.target.value);
    }
    const [text, settext] = useState('Enter here!');
   
  return (
      <>
      <div className='container'>
      <div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={textonchange} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className='btn btn-primary' onClick={textupdateUp}>convert to upper case</button>
<button className='btn btn-primary' onClick={textupdateDown}>convert to lower case</button>
<button className='btn btn-primary' onClick={handleExtract}>remove all the symbols</button>
<button className='btn btn-primary' onClick={handletextclear}>Clear text</button>



    </div>
    <div className="container my-2">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
      </>
  )
}
