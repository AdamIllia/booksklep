import React from "react";
import "./header.css"; 
export default function Header (){
    return(
       <>
       <img src="/image/logo.png" className="image"></img>
        <div className="header">
             <div className="paragraf">Backstage Talks is a magazine of casual, but in depth 
                dialogues on design and business. 
                Our decisions shape and influence this complex world—to have a chance 
                to make the right ones, we need to talk.
                <p style={{fontSize: "13px", fontWeight:'lighter'}}>© 2025 <a href="https://buromilk.com/" style={{color:"black", fontWeight:"lighter"}}>Published by Büro Milk</a></p>
                </div>
               
                <h3><a href="https://backstagetalks.com/privacy-policy.php" style={{color: "black"}}>Privacy Policy</a></h3>
        </div>
        </>
    )
}
