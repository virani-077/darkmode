import React, { useState } from 'react'

const DarkMode = (props) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
};
  return (
    <>
        <div className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} transition-colors duration-500`}>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md" onClick={toggleDarkMode}>
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <div className="p-4">
                <h1 className="text-3xl font-bold">Hello, Welcome to Dark Mode!</h1>
                <p className="mt-4 text-lg">This is an example of how you can implement dark mode using Tailwind CSS in React.js.</p>
            </div>
        </div>
    </>
  )
}

export default DarkMode