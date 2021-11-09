import React from "react";
import styled from "styled-components";
import Contact from "./components/Contact/Contact";
import chats from "./datas";

const Container = styled.div`
max-width: 800px;
`;
const Header = styled.header`
display:flex;
flex-direction: column;
align-items: center;
`;
const Logo = styled.img`
width: 80px;
heigth: 50px;
`;
const Heading = styled.h1`
text-align: center;
`;
const List = styled.ul`
list-style: none;
`;


function App() {
  return (
    <Container>
      <Header>
        <Logo
          src={`logo.jpg`}
          alt="Logo" />
        <Heading>
          Telegram
        </Heading>
      </Header>
      <List>
        {chats.map(chat => (
          <Contact
            chat={chat}
            key={chat.id}
          />
        ))}
      </List>
    </Container>
  );
}

export default App;
