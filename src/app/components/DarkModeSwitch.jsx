'use client'

import React from 'react'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import {useTheme} from 'next-themes'
function DarkModeSwitch() {
    const {theme, setTheme, systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div>
        {
            currentTheme === 'dark' ? (
                <MdLightMode onClick={() => setTheme('light')} className='cursor-pointer text-2xl'/>
            ) : (
                <MdDarkMode onClick={() => setTheme('dark')} className='cursor-pointer text-2xl'/>
            )
        }
    </div>
  )
}

export default DarkModeSwitch