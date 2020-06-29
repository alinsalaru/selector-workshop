import React from 'react';
import './App.css';
import './styles/exercises.css'
import { Validator } from './components'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { isRuleApplied, isValidXpath } from './validation/rules'

function App() {
  const password = "Pa$$Werd"
  library.add(faCheck)

  return (
    <>
      <header className="App-header">
        Selector Workshop
      </header>

      <div className="exercise1">
        <h3> Exercise 1</h3>
        <div> 
        {/* extra points $('input[type=password]').value */}
          <Validator text="Can u h@ck my password?"
                    validateFunc={(val) => val.includes('$0.value') || val.includes('Pa$$Werd')}>
              <p>Crypto backed, penetration-durable, ultra vault secure password</p>
              <p>Use chrome dev tools and historical reference to find last DOM element inspected</p>
              <input type="password" defaultValue={password} />
          </Validator>
        </div>
      </div>

      <div className="exercise2">
        <h3> Exercise 2</h3>
        <Validator text="What css selector do we need to target the div with 'D1' id?"
                   validateFunc={(val) => (val.includes('#D1') || val.includes('.csharp #D1')) && isRuleApplied(val)}>
            <div> 
              <div className="csharp">
                <div id="D1"> hello there</div>
              </div>
            </div>
        </Validator>
      </div>

      <div className="exercise3">
      <h3> Exercise 3</h3>
        <Validator text="For the next exercise we want to target and check all boxes except the first one"
                   extraText="Hint: CSS pseudoselectors. In the answer input box, please type only the CSS selector that you used."
                   type="checkbox"
                   needsAnswer
                   values={['option1','option2','option3', 'option4']}
                   validateFunc={(val) => (val.includes('.exercise4 input:not(:first-of-type)') || val.includes('.exercise4 input:nth-of-type(n+2)')) && isRuleApplied(val)}>
        </Validator>
      </div>

      <div className="exercise4">
      <h3> Exercise 4</h3>
      <Validator text=" Capture the name using XPath from the following HTML "
                   validateFunc={(val) => isValidXpath(val) && val.includes('span')}>
                    <div className="firstChild">
                       We have our name which is defined by what we devoted ourselves to and spent our time on in this life.
                     </div>
                     <div id="container">
                       <p>His name is <span>Robert Paulson</span></p>
                     </div>
        </Validator>
      </div>

      <div className="exercise5">
      <h3> Exercise 5</h3>
        <Validator text="Can we traverse an iframe within document context with a css, xpath selector?"
                   type="radio"
                    values={ ['yes','no','maybe']}
                   validateFunc={(val) => (val === 'no')}>
        </Validator>
      </div>

      <div className="exercise6">
        <h3> Exercise 6</h3>
        <iframe title="a wild iframe appears" src="/iframexample.html" height={200} width={500}/>  
      </div>
    </>
  );
}

export default App;
