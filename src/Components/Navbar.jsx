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
    /* position: sticky; */
    font-family:"Pacifico", cursive;
    /* color: rgb(153, 50, 204); */
    color: orange;
    font-size: 30px;
`
const List = styled.li`
    /* font-family:"Pacifico", cursive; */
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    color: #fff;
    align-items: center;
    
    .icon{
      background-color: #fff;
      color: darkmagenta;
      border-radius: 50%;
      padding: 8px;
      margin-left: 5px;
    }
    .icon:hover{
     opacity: 0.5;
     cursor: pointer;
   
    }

 `

const Span = styled.span`
    margin-left: 10rem;
    font-weight: bolder;
    cursor: pointer;
    &:hover{
        color: orange;
    }
`
const Button = styled.button`
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #000;
  background-color: darkorange;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  float: right;
  margin-left: 100px;
  font-weight: bolder;

  &:hover{
    opacity: 0.5;
  }
`
const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Container>
      <List>
        <Heading>Portfolio</Heading>
        <Span onClick={()=>Navigate('/')}>Home</Span> 
        <Span onClick={()=>Navigate('/about')}>About</Span> 
        <Span onClick={()=>Navigate('/projects')}>Projects</Span>
        <Span onClick={()=>Navigate('/contacts')}>Contacts</Span> 
        <Span><Input placeholder='Search here...'></Input></Span>
        <SearchIcon className='icon'/>
        <Button> Login </Button>
      </List>
      </Container>
    </>
  )
}

export default Navbar;
