import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Components/Styles/Footer.css'

export const Footer = () => {
  return (
    
    <div className='footer'>
     
        <div className='socialMedia'>
            <a href='https://github.com/Mferik' target="_blank"  rel="noopener noreferrer"><GitHubIcon/></a>
            <a href="https://www.instagram.com/fatiheriik/" target="_blank"  rel="noopener noreferrer"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/muhammet-fatih-erik-472b12214/" target="_blank"  rel="noopener noreferrer"><LinkedInIcon/></a>
            
        </div>
        <p>Tüm Hakları Saklıdır © | MFE's Pizzas | <span className='footer-since'> Since 1998 </span> </p>
    </div>
  )
}
