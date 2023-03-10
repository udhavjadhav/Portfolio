import React from 'react'
import Navbar from '../Navbar/Navbar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Container = styled.div`
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    text-align: center;
   
    .image{
      height: 45px;
      width: 45px;
      margin: 10px;
    }
   
    `
const Container1 = styled.div`
  border: 1px solid lightgray;
  display: block;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  padding: 20px;
`
const Container2 = styled.div`
  border: 1px solid lightgray;
  display: block;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  padding: 20px;
 
 .icon{
    color:#fff;
    margin: 15px;
   }
   .icon:hover{
    color:darkorange;
   }
`
const Container3 = styled.div`
  border: 1px solid lightgray;
  display: block;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  padding: 20px;
`
const H1 = styled.h1`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 30px;
    color: white;
    text-align: center;
    margin-top: 100px;
`
const H2 = styled.h2`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 30px;
    color: white;
    text-align: center;
    border-bottom: 2px dotted orange;
    padding-bottom: 20px;
    `
const H4 = styled.h4`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    text-align: center;
    line-height: 1.5;
`
const Button = styled.button`
    padding: 12px;
    background-color: #f72145;
    color: #fff;
    border: none;
    margin-top: 20px;
    font-weight:bolder;
    cursor: pointer;

    &:hover{
        opacity: 0.5;
    }
`
const About = () => {
  return (
    <div>
      <Navbar />
      <H1>About <InfoOutlinedIcon/></H1>
      <Container>
        <Container1>
          <H2> Who I am? </H2>
          <H4>A React JS Developer </H4>
          <H4>Located in Pune, Maharashtra</H4>
          <H4>India - 411023</H4>
          <H4>Currently Doing Internship at Senwell Solution</H4>
          <H4>Kharadi Pune, 411023</H4>
          <Link to='https://drive.google.com/file/d/17R57vNRxO2UdK6H2Y1XbXqQ529LI00LO/view?usp=share_link' target='_blank'><Button>Download CV</Button></Link>
        </Container1>
        <Container2>
          <H2> Personal Info </H2>
          <H4>Email : dev.udhavjadhav@gmail.com</H4>
          <H4>LinkedIn : www.linkedin.com/in/udhavjadhav</H4>
          <H4>Phone: +91 9096777985</H4>
          <H4>Skype: udhav_jadhav</H4>
          <H4>Birthday: 19th March, 1997</H4>
          <Link to="http://github.com/udhavjadhav" target='_blank'><GitHubIcon className='icon' fontSize='large' /></Link>
          <Link to="http://linkedin.com/in/udhavjadhav" target='_blank'><LinkedInIcon className='icon' fontSize='large' /></Link>
          <Link to="http://twitter.com/theudhavjadhav" target='_blank'><TwitterIcon className='icon' fontSize='large' /></Link>
          <Link to="http://instagram.com/theudhavjadhav" target='_blank'><InstagramIcon className='icon' fontSize='large' /></Link>
        </Container2>
        <Container3>
          <H2> My Experties </H2>
          <H4>React JS Development</H4>
          <H4>Redux Development</H4>
          <H4>UI / UX Development</H4>
          <H4>Frontent Development</H4>
          <H4>Web Development</H4>
          <img className='image' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
          <img className='image' src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-256.png" alt="" />
          <img className='image' src="https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png" alt="" />
        </Container3>
      </Container>
    </div>
  )
}

export default About
