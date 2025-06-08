import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center p-10 bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-400 shadow-sm text-white ">

      
      <aside>
        <div className='text-center'>
          <p className='font-bold text-2xl'>HappyPlants</p>
        </div>   
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>

      <div className='flex gap-6'>
        <a href="https://www.linkedin.com/in/syed-sifat-a62825286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank' rel='noopener noreferrer' className="text-[#0A66C2] hover:opacity-80"><FaLinkedin/></a>
        <a href="https://x.com/Sifat2004?t=L7WghcnPvWJVEptGwmzq3A&s=09" target='blank' rel='noopener noreferrer' className="text-[#000000] hover:opacity-80 bg-white" ><FaXTwitter/></a>
        <a href="https://youtube.com/@syedsifat7684?si=W_Wk7nav2pctOOn2" target='blank' rel='noopener noreferrer' className="text-[#FF0000] hover:opacity-80"><FaYoutube/></a>
        <a href="https://www.instagram.com/_sifat_3_7_4?igsh=MTA1ODI3eXdrcXQ1cw==" target='blank' rel='noopener noreferrer' className="text-[#E4405F] hover:opacity-80"><FaInstagram/></a>
        <a href="https://facebook.com" target='blank' rel='noopener noreferrer' className="text-[#1877F2] hover:opacity-80"><FaFacebook/></a>
      </div>
    </footer>
    );
};

export default Footer;