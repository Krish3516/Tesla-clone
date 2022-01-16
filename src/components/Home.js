import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
          <Section 
             title="Model S"
             description="Order Online for Touchless Delevery"
             backgroundImg="model-s.jpg"
             LeftBtnText="Custom order"
             RightBtnText="Existing inventory"
          />
          <Section 
          title="Model Y"
          description="Order Online for Touchless Delevery"
          backgroundImg="model-y.jpg"
          LeftBtnText="Custom order"
          RightBtnText="Existing inventory"

          />
          <Section 
          title="Model 3"
          description="Order Online for Touchless Delevery"
          backgroundImg="model-3.jpg"
          LeftBtnText="Custom order"
          RightBtnText="Existing inventory"
          />
          <Section 
          title="Model X"
          description="Order Online for Touchless Delevery"
          backgroundImg="model-x.jpg"
          LeftBtnText="Custom order"
          RightBtnText="Existing inventory"
          />
          <Section 
          title="Lowest Cost Solar Panels in 
          America"
          description="Money-back gurantee"
          backgroundImg="solar-panel.jpg"
          LeftBtnText="Order now"
          RightBtnText="Learn more"

          />
          <Section 
          title="Solar For New Roofs"
          description="Solar Roof Costs less Than a New Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          LeftBtnText="Order now"
          RightBtnText="Learn more"
          />
          <Section 
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          LeftBtnText="Shop now"
          
          />
        </Container>
    )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
