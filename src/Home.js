import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 100px;
`;

const Button = styled.span`
  background-color: var(--blue);
  color: #fff;
  font-size: 20px;
  border-radius: 15px;
  padding: 10px;

  &:hover {
    box-shadow: 0 2px 10px var(--pink);
    
  }
`;

const LoginLink = styled.span`
  color: var(--dark-grey);
  padding: 10px;

  &:hover {
    color: var(--pink);
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home = props => 
  <Container>
    <LinkContainer>
    <Link to="/create" style={{margin: "10px"}}><Button>Create a Profile</Button></Link>
  {/* TODO: currently go directly to dummy user profile, build log in page if time allows */}
    <Link to="/user/1" style={{margin: "10px"}}><LoginLink>or Log in</LoginLink></Link>
    </LinkContainer>
  </Container>

export default Home;