import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="main-footer">
            <strong> <Link to='/Dashboard'>GS Technologies © 2021</Link>.</strong>
            
            <div className="float-right d-none d-sm-inline-block">
                <b>All rights reserved.</b> 
            </div>
        </footer>   

    )
}
