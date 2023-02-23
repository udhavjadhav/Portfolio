import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    height: 70px;
    width: 100%;
    .underline{
      border-bottom: 2px solid darkorange;
      padding: 10px;
    }
    .underline:hover{
      border-bottom: 2px solid #fff;
      border-top: 2px solid springgreen;
    }
    
    @media screen and (max-width: 480px){
        width: 100%;
        padding: auto;
        margin: auto;
    }
    `
const Input = styled.input`
  border-radius: 55px;
  padding: 10px;
  background: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  border:2px solid #fff;
`
const Heading = styled.span`
    font-family:"Pacifico", cursive;
    color: darkorange;
    font-size: 30px;
`
const List = styled.li`
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    color: #fff;
    align-items: center;
    
    .icon{
      background-color: darkorange;
      color: #fff;
      border-radius: 10% 50% 50% 10%;
      padding: 8px;
      margin-left: 5px;
    }
    .icon:hover{
     opacity: 0.5;
     cursor: pointer;
    }

 `

const Span = styled.span`
    margin-left: 8rem;
    font-weight: bolder;
    cursor: pointer;
    &:hover{
        color: darkorange;
    }
    
`
const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Container>
      <List>
        <Heading>Portfolio</Heading>
        <Span className='underline' onClick={()=>Navigate('/')}>HOME</Span> 
        <Span className='underline' onClick={()=>Navigate('/about')}>ABOUT</Span> 
        <Span className='underline' onClick={()=>Navigate('/projects')}>PROJECTS</Span>
        <Span className='underline' onClick={()=>Navigate('/contacts')}>CONTACTS</Span> 
        <Span><Input placeholder='Search here...'></Input></Span>
        <SearchIcon className='icon'/>
        
      </List>
      </Container>
    </>
  )
}

export default Navbar;
