import React from "react";
import { Chat } from "../styles/Chat";
import { ChatAvatar } from "../styles/ChatLogo";
import { Avatar } from "../styles/Avatar";
import { AvatarActive } from "../styles/AvatarActive";
import { ChatMessage } from "../styles/ChatMessage";
import { MessageInfo } from "../styles/MessageInfo";
import { Time } from "../styles/Time";
import { Author } from "../styles/Author";
import { Message } from "../styles/Message";

function Contact(props) {
  const {
    id,
    userName,
    avatar,
    status,
    lastMessage
  } = props.chat


  return (
    <li key={id}>
      <Chat>
        <ChatAvatar>
          {status === 'online' ? (
            <AvatarActive
              src={avatar}
              alt={status}
            />
          ) : (<Avatar
            src={avatar}
            alt={status}
          />)}
        </ChatAvatar>
        <ChatMessage>
          <MessageInfo>
            <Author>
              {userName}
            </Author>
            <Message>
              {`${lastMessage.author}: ${lastMessage.message}`}
            </Message>
          </MessageInfo>
          <Time>
            {lastMessage.send}
          </Time>
        </ChatMessage>
      </Chat>
    </li>
  );
}

export default Contact;
