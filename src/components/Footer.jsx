import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-right text-white">
            <SocialIcon url="mailto: cz1842@nyu.edu" network="email" fgColor="white" />
            <SocialIcon url="https://linkedin.com/in/chengang-zhang" fgColor="white"/>
            <SocialIcon url="https://github.com/chengang-zhang" fgColor="white"/>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;