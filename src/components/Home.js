import React from 'react'
import styled from 'styled-components';
// import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
        <Section
        title = "Model s"
        description = "Order online and have a touchLess delivery"
        backgroundImage = "model-s.jpg"
        LeftBtnText = "Custom Order"
        RightBtnText = "Existing Inventory"
        />
        <Section
        title = "Model y"
        description = "Order online and have a touchLess delivery"
        backgroundImage = "model-y.jpg"
        LeftBtnText = "Custom Order"
        RightBtnText = "Existing Inventory"
        />
         <Section
        title = "Model x"
        description = "Order online and have a touchLess delivery"
        backgroundImage = "model-x.jpg"
        LeftBtnText = "Custom Order"
        RightBtnText = "Existing Inventory"
        />
         <Section
        title = "Solar Panel"
        description = "Provding solar panel across globe"
        backgroundImage = "solar-panel.jpg"
        LeftBtnText = " Order"
        />
         <Section
        title = "Solar Roof"
        description = "Aim at Bright future"
        backgroundImage = "solar-roof.jpg"
        LeftBtnText = "Order"
        />
           <Section
        title = "Accessories"
        description = "Order online and have a touchLess delivery"
        backgroundImage = "accessories.jpg"
        LeftBtnText = "Show now"
        />
       
    </Container>
  )
}

export default Home
// const Container = styled.div`

// `;
const Container = styled.div`
  height : 100vh;
` 