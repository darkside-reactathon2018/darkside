import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as bg from "./assets/bg.jpg";

const Container = styled.div`
  // margin: 100px;
  padding-top: 20%;
  padding-right: 4%;
`;

export const Button = styled.span`
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
  <div style={{
    margin: 0
  }}>
    <img src={bg} style={{
      position: 'absolute',
      display: 'block',
      'z-index': '-1',
      width: '100%',
      height: '100%'
    }}/>
    <Container>
      <LinkContainer>
        <Link to="/create" style={{ margin: "10px" }}><Button>Create a Profile</Button></Link>
        {/* TODO: currently go directly to dummy user profile, build log in page if time allows */}
        <Link to="/user/1" style={{ margin: "10px" }}><LoginLink>or Log in</LoginLink></Link>
      </LinkContainer>
    </Container>
  </div>

export default Home;