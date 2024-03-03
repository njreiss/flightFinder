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
            <div className='text-4xl text-textBlue'>
              FlightFinder
            </div>
            <div className="ml-auto text-xl">
              <button className='border-bgBlue text-textBlue px-2 py-1 rounded-xl border-4'>
                Sign In
              </button>
            </div>
          </div>
          <hr className='absolute bottom-0 w-full border-1 border-bgBlue'/>
        </div>
      </div>
      
      {/*Conversation type area */}
      <div className='w-[40%] pt-[88px]'>
        <div className='max-w-96 w-fit text-md text-textBone px-4 py-2 float-right bg-bgBlue rounded-xl'>
          {floatingText && (
            <p className="floating-text transition-all duration-500 ease-in-out">
              {floatingText}
            </p>
          )}
        </div>
      </div>

      {/*Bottom of the page: vertical line and input prompt */}
      <div className="flex flex-col absolute bottom-0 w-[40%] h-18 items-center">
        <hr className='opacity-50 w-[-4] border-1 border-bgBlue' style={{ width: "calc(100% - 20px)" }}/>
        <input 
          className='flex-grow w-full rounded-2xl border-4 bg-bgBone border-bgBlue text-md placeholder-tertiary text-textBlue mx-3 mb-3 mt-1 px-3 py-2 focus:outline-none' 
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
