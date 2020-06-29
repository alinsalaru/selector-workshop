import React, { useState  } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Validator.css'

const Validator = (props) => {
    const [valid, setValid] = useState('');
    const [answer, setAnswer] = useState('');
    const [animatedCSS, setAnimatedCSS] = useState('faa-bounce animated');
    const {children, text, extraText, validateFunc, type, values, needsAnswer, updateAnswer} = props;
    const validate = () => {
        const validated = validateFunc(answer)
        if (validated) {
            setValid(true)
            setTimeout(()=>{
                setAnimatedCSS(animatedCSS.replace('animated',''))
            }, 2000)
            return
        }
        setValid(false)
    }

  
    const onchanged = (elem) => {
        setAnswer(elem.target.value)
        console.log(elem.target.value)
    }

    return (
        <>
            <div>HTML content:</div>
            {children}
            <div>
                {text}
            </div>
            {
                extraText && ( 
                <div>
                    {extraText}
                </div>)
            }
            {
            type && type==="radio" && values.map(e => {
                return (
                  <React.Fragment key={e}>   
                  <input type="radio" id={e} value={e} name="answer" onChange={onchanged} />
                  <label htmlFor={e}>{e}</label>
                  </React.Fragment>
                )
              })
            }
             {
            type && type==="checkbox" && values.map(e => {
                return (
                  <React.Fragment key={e}>   
                  <input type="checkbox" id={e} value={e} name="answer" onChange={onchanged} />
                  <label htmlFor={e}>{e}</label>
                  </React.Fragment>
                )
              })
            }
            <div>
                {(!type || needsAnswer) && <input type="text" placeholder="your answer" onChange={(e)=>setAnswer(e.target.value)}></input>}
            </div>
            <button className="evaluator" onClick={validate}>Validate</button>
            {valid ? 
            (<FontAwesomeIcon className={animatedCSS} icon="check" size="2x" color="green"/>) : 
            (<></>)}
        </>
    )
}

export default Validator