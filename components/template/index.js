import React from 'react'
import Navbar from '@/components/Navbar'

const Template = ({ children }) => {
    return (
        <main>
            <Navbar />
            <div>
                {children}
            </div>
        </main>
    )
}

export default Template