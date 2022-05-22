// import React, { useState } from 'react'
import React from 'react'


export default function About(props) {
    // const[myStyle,setMyStyle] = useState({
    //     color:'white',
    //    backgroundColor : 'black'
    // })
    // const[btntext,setBtnText] = useState("Enable Light Mode")

    // const toggleStyle = () => {
    //     if(myStyle.color ==='white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor : 'black'
               
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }
    let myStyle = {
        color: props.mode ==='dark'?'white':'black',
        backgroundColor : props.mode === 'dark'?'#042723':'white'
    }
  return (
    <div className='container' style={myStyle}>
        <h2>About us</h2>
            <div class="accordion my-3" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   Analyze your text
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count,character count.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   Free to use
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                   TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser compatible
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                   This word countersoftware works in any web browsers such as Chrome, Firefox, Internet Explorer,Safari, Opera. It suits to count characters infacebook, blog, excel document, pdfdocument, essays etc.
                </div>
                </div>
            </div>
            </div>
            {/* <button className="btn btn-primary" onClick={toggleStyle}>{btntext}</button> */}
    </div>
  )
}
