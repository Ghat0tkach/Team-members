import React from 'react'
import styles from "./header.module.css";



function Header() {
  return (
      <div className={styles.header}>
         < div className={styles.logo}>
          <img src='logo-cropped-removebg.png'/>
         </div>
        
          <ul>
            
            <li><a href=''>Team</a></li>
            <li><a href=''>Past Events</a></li>
            <li><a href=''>About Us</a></li>
            <li><a href=''>Contact us</a></li>
           
          </ul>
          
          <svg  className={styles.hamburger} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M20 12L4 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 17L4 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
          
        
      </div>
  )
}

export default Header
