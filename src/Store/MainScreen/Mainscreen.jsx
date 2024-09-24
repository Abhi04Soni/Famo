import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Posts from '../../Components/Posts/Posts'
import './MainScree.css'

export default function Mainscreen() {
    return (
        <div className='Mainscreen'>
            <Navbar />
            <div className='Mainscreen-scroll'>
                <div className='Mainscreen-posts'><Posts /></div>
                <div className='Mainscreen-posts'><Posts /></div>
                <div className='Mainscreen-posts'><Posts /></div>
            </div>
        </div>
    )
}
