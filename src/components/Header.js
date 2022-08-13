import React from 'react'
import styled from 'styled-components'
// import MenuIcon from '@mui/icons-material/Menu';
// import { Fade } from 'react-reveal'
import MenuIcon from '@material-ui/icons/Menu'
function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="The logo of the image" />
      </a>
      <Menu>
        <p><a href="/">Model X</a></p>
        <p><a href="">Model Y</a></p>
        <p><a href="">Model Z</a>
        </p>
        <p><a href="">Model Z</a>
        </p>
      </Menu>
      <RightBar>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
        <CustomMenu /> 
      </RightBar>
      </Container>
    
   
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  // padding:0px 20px;
  top:0px;
  right:0px;
  left:0px;
  justify-content:space-between;
  z-index:1;

` 
const Menu = styled.div`
display:flex;
// padding:0px 20px;
justify-content:center;
align-items:center;
flex:1;
a{
  font-weight:600;
  padding:0 20px;
  text-transform:uppercase;
  flex-wrap:nowrap;
}
@media (max-width:800px){
  display:none;
}
`
const RightBar = styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  padding:0 10px;
  // padding:0 10px;
  text-transform:uppercase;
  flex-wrap:nowrap;
}


`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`

// const HamBurger = styled.div`
//     postion:fixed;
//     top:0;
//     bottom:0;
//     right:0;
//     background:white;
//     width : 300px;
//     z-index:20;
//     height:100vh;
// `