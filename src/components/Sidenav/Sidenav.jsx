import React from 'react'
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";


export const Sidenav = () => {
  const navStyle= (isActive)=>{
      return(
        {
          fontWeight:isActive?"bold":"normal"
        }
      )
  }
  return (
    


    <Navbar isBordered >
      <Navbar.Brand>
        
        <Text b color="inherit" hideIn="xs">
          React Navbar
        </Text>
      </Navbar.Brand>
      <Navbar.Content  enableCursorHighlight hideIn="xs">
      <Navbar.Link  isActive={()=>{navStyle(this.state.isActive)}}   href="/upload">Calc</Navbar.Link>
        <Navbar.Link  isActive={()=>{navStyle(this.state.isActive)}}   href="/calc">Calc</Navbar.Link>
        <Navbar.Link isActive={()=>{navStyle(this.state.isActive)}}   href="/userlist">Userlist</Navbar.Link>
        <Navbar.Link isActive={()=>{navStyle(this.state.isActive)}}  href="/form">Form</Navbar.Link>
        <Navbar.Link  isActive={()=>{navStyle(this.state.isActive)}} href="/Apifetch">Fortnite</Navbar.Link>
        <Navbar.Link  isActive={()=>{navStyle(this.state.isActive)}} href="/falsktry">Flaskatry</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
      
    </Navbar>
      
  
  )
}


