import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <StyledFooter> 
        <FooterContainer> 
            <SocialIcons> 
                <a href=""><FontAwesomeIcon icon={faFacebook} /></a> 
                <a href=""><FontAwesomeIcon icon={faInstagram} /></a> 
                <a href=""><FontAwesomeIcon icon={faTwitter} /></a> 
                <a href=""><FontAwesomeIcon icon={faYoutube} /></a> 
                </SocialIcons>
        <FooterNav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">News</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Our Team</a></li>
          </ul>
        </FooterNav>
      </FooterContainer>
      <FooterBottom>
        <p>Copyright &copy; 2024, All Rights Reservs.</p>
      </FooterBottom>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer` 
    background-color: #111; `; 
const FooterContainer = styled.div` 
    width: 100%; 
    padding: 70px 30px 20px; `; 
const SocialIcons = styled.div` 
    display: flex;
    justify-content: center; 
    a { 
    text-decoration: none; 
    padding: 10px; 
    background-color: white; 
    margin: 10px; 
    border-radius: 50%; 
    svg { 
    font-size: 1.25em; 
    color: black; 
    opacity: 0.9;
    } &:hover { 
     background-color: #111; 
     transition: 0.5s; 
     svg { 
     color: white; transition: 0.5s;
} } } `; 
   const FooterNav = styled.div`
   margin: 30px 0; 
   ul {
   display: flex; 
   justify-content: center; 
   list-style-type: none; 
   li a { 
   color: white; 
   margin: 20px; 
   text-decoration: none; 
   font-size: 1em; 
   opacity: 0.7; 
   transition: 0.5s;
   &:hover {
   opacity: 1; 
} } } 
   @media (max-width: 700px) {
   ul { 
   flex-direction: column; 
   li {
   width: 100%;
   text-align: center; 
   margin: 10px; 
} } } `; 
   const FooterBottom = styled.div` 
   background-color: #000; 
   padding: 20px; 
   text-align: center; 
   p { 
   color: white; 
   .designer { 
   opacity: 0.7;
   text-transform: uppercase; 
   letter-spacing: 1px; 
   font-weight: 400; 
   margin: 0 5px; 
} } `;
export default Footer;
