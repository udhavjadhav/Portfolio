import React from 'react'
import Navbar from '../Navbar/Navbar'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Container = styled.div`
 display: grid;
 grid-template-columns: 33.33% 33.33% 33.33% ;
 height: 30rem;
 .image{
  height:35px;
  width: 35px;

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
  padding: 30px;

  .icon{
    margin-right: 20px;
    color: #fff;
  }

  .icon:hover{
    color: darkorange;
  }
`
const Container2 = styled.div`
  border: 1px solid lightgray;
  display: block;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  padding: 30px;

.icon{
  margin-right: 20px;
  color: #fff;
}
.icon:hover{
    color: darkorange;
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
  padding: 30px;

.icon{
  margin-right: 20px;
  color: #fff;
}
.icon:hover{
    color: darkorange;
  }
  
`
const H2 = styled.h2`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    text-align: center;
    margin-top: 100px;
`
const H3 = styled.h2`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    padding-bottom: 15px;
    border-bottom: 2px dotted orange;
`
const P = styled.p`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  line-height: 2;
  font-size: 18px;
`

const Projects = () => {
  return (
    <div>
    <Navbar/>
    <H2>Projects</H2>
    <Container>  
      <Container1>
          <H3>Breathing App</H3>
          <P>Breathing App is a fullstack meditation app used to practice breathing exercise and listen the different types of meditation music / melodies also mix the music as well. </P>
          <P>Technology Used:</P>
          <P>Frontend: React-JS, Material UI, CSS, Bootstrap <br/>
            Backend: Node JS <br/>
            Database: Sqlite3
          </P>
          <Link to="http://github.com/udhavjadhav/Breathing-app" target='_blank'><GitHubIcon className='icon' fontSize='large' /></Link>
          <Link to="http://breathlly.netlify.app" target='_blank'><img className='image' src="/assets/netlify.png" alt="" /></Link>
      </Container1>
      <Container2>
        <H3>E-Commerce Website</H3>
        <P>Breathing App is a fullstack meditation app used to practice breathing exercise and listen the different types of meditation music / melodies also mix the music as well. </P>
          <P>Technology Used:</P>
          <P>Frontend: React-JS, Material UI, CSS, Bootstrap <br/>
            Backend: Node JS <br/>
            Database: Sqlite3
          </P>
          <Link to="https://github.com/udhavjadhav/E-Commerce" target='_blank'><GitHubIcon className='icon' fontSize='large' /></Link>
          <Link to="https://shopifffy.netlify.app/" target='_blank'><img className='image' src="/assets/netlify.png" alt="" /></Link>
      </Container2>

      <Container3>
      <H3>Google-Meet Clone</H3>
      <P>Breathing App is a fullstack meditation app used to practice breathing exercise and listen the different types of meditation music / melodies also mix the music as well. </P>
          <P>Technology Used:</P>
          <P>Frontend: React-JS, Material UI, CSS, Bootstrap <br/>
            Backend: Node JS <br/>
            Database: Sqlite3
          </P>
          <Link to="http://github.com/udhavjadhav/weconnect" target='_blank'><GitHubIcon className='icon' fontSize='large' /></Link>
          <img className='image' src="/assets/netlify.png" alt="" />
      </Container3>
      {/* <Container4>
      <H3>To-do List App</H3>
      </Container4> */}
    </Container>
    </div>
  )
}

export default Projects;
