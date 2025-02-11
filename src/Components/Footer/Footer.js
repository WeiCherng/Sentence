import "./Footer.css"
import React from "react"

export default function Footer(){
    return(
        <div className="footer-container">
            <h2 className="footer-title">SENTENCE</h2>
            <p className="footer-link">Get Your Random Sentence Today</p>
            <div className="line-break"></div>
            <p className="font2">© {new Date().getFullYear()} . WeiCherngTang</p>
        </div>
    )
}