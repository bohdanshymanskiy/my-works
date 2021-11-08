import React from "react";
import { Header } from "./components/styles/Header";
import { Container } from "./components/styles/Container";
import { List } from "./components/styles/ListOfChat";
import { Heading } from "./components/styles/Heading";
import { Logo } from "./components/styles/Logo";
import Contact from "./components/Contact/Contact";
import chats from "./datas";

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
