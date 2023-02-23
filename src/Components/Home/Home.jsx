import React from 'react'
import Navbar from '../Navbar/Navbar'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Container = styled.div`
     display: grid;
     grid-template-columns: 70% 30%;
`
const Container1 = styled.div`
    font-family: 'Roboto', sans-serif;
    text-align: center;
    justify-content: center;
    font-size: 35px;
    margin-top: 100px; 
    color: #fff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    .icon{
        margin: 10px;
        cursor: pointer;
        color:#fff;
    }
    .icon:hover{
        color: darkorange;
    }
`
const Container2 = styled.div`
   display: grid;
   justify-content: end;
   margin-top: 40px;
   padding: 50px;
   &.img{
    display: grid;
    flex-wrap: wrap;
    padding: auto;
    height:500px;
    width: auto;
    z-index: -1;
   }
   
`
const Container3 = styled.div``

const H1 = styled.h1``

const H6 = styled.h6`
   font-size: medium;
   line-height: 1;
`
const Span = styled.span`
    color: #f72145;
`
const H3 = styled.h3``
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
const Home = () => {
    return (
        <>
            <Navbar />
            <Container className='main'>
                <Container1 className='info'>
                    <H1>I'm Udhav Jadhav</H1>
                    <H3>A <Span>React JS</Span> Developer</H3>
                    <H6>Self-Driven, quick starter,</H6>
                    <H6>Passionate developer with a curious mind</H6>
                    <H6>Who enjoys solving a complex and challenging real-world problems !!</H6>
                    <Link to="http://github.com/udhavjadhav" target='_blank'><GitHubIcon className='icon' fontSize='large' /></Link>
                    <Link to="http://linkedin.com/in/udhavjadhav" target='_blank'><LinkedInIcon className='icon' fontSize='large' /></Link>
                    <Link to="http://twitter.com/theudhavjadhav" target='_blank'><TwitterIcon className='icon' fontSize='large' /></Link>
                    <Link to="http://instagram.com/theudhavjadhav" target='_blank'><InstagramIcon className='icon' fontSize='large' /></Link>
                    <Container3>
                        <Link to='https://drive.google.com/file/d/17R57vNRxO2UdK6H2Y1XbXqQ529LI00LO/view?usp=share_link' target='_blank'><Button>Download CV</Button></Link>
                    </Container3>
                </Container1>
                <Container2 className='img'>
                    <img src="https://preview.colorlib.com/theme/personal/img/hero-img.png" alt="" />
                </Container2>
            </Container>
        </>
    )
}

export default Home
