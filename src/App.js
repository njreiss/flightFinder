import logo from './logo.svg';
import './Tailwind.css';
import React, {useState} from 'react';
import './App.css';

const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [floatingText, setFloatingText] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  }

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      setFloatingText(inputValue);
      setInputValue('');
    }
  }
  return (
    <div className="relative min-h-screen flex justify-center w-full bg-bgBone">
      {/*header*/}
      <div className="flex absolute items-center top-0 w-full h-20">
        <div className='flex-row w-full'>
          <div className='flex px-10'>
            <div className='text-5xl text-textBlue'>
              FlightFinder
            </div>
            <div className="ml-auto text-xl">
              <button className='border-bgBlue text-tertiary p-2 rounded-2xl border-4'>
                sign in
              </button>
            </div>
          </div>
          <hr className='absolute bottom-0 w-full border-1 border-bgBlue'/>
        </div>
      </div>
      
      {/*Conversation type area */}
      <div className='w-5/6 pt-24'>
        <div className='w-fit max-w-prose text-xl text-textBone px-3 py-2 float-right bg-bgBlue rounded-xl'>
          {floatingText && (
            <p className="floating-text transition-all duration-500 ease-in-out">
              {floatingText}
            </p>
          )}
        </div>
      </div>

      {/*Bottom of the page: vertical line and input prompt */}
      <div className="flex flex-col absolute bottom-0 w-5/6 h-20 items-center ">
        <hr className='w-5/6 border-1 border-bgBlue'/>
        <input 
          className='flex-grow w-full rounded-2xl border-4 bg-bgBone border-bgBlue text-xl placeholder-tertiary text-textBlue m-3 px-3 py-2 focus:outline-none' 
          name="textfield"
          placeholder='Write a prompt to begin searching flights'
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}>
        </input>
      </div>
    </div>
  );
};

export default App;
