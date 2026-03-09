import React, {useState} from 'react'
import { use } from 'react'

function Settings() {
  const [notifications, setNotification] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center p-6 '>
      <div className='bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8'>
        <h2 className='text-3xl font-bold mb-6 text-center text-gray-800'>
          settings
        </h2>
        <div className='mb-6'>
          <h3 className='text-xl font-semibold mb-3 text-gray-700'>
             Profile Information

          </h3>
          

        </div>

      </div>
    </div>
  )
}

export default Settings
