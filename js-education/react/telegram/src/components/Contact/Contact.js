import React from "react";
import styled from "styled-components"

const Chat = styled.div`
padding: 3px;
display: flex;
flex-direction: row;
align-items: center;
border: 2px solid gray;
`
const ChatAvatar = styled.div`
width: 80px;
heigth: 80px;
`
const Avatar = styled.img`
width: 70px;
height: 70px;
border-radius: 50%
`
const Online = styled.div`
  background-color: green;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;
  bottom: 18px;
  left: 50px;
`;
const ChatMessage = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`
const MessageInfo = styled.div`
display:flex
flex-direction: column;
`
const Time = styled.p`
opacity: 0.5;
`
const Author = styled.h3`
text-align: center;
`
const Message = styled.p`
font-size: 15px;
`

function Contact(props) {
  const {
    id,
    userName,
    avatar,
    status,
    amIAuthor,
    lastMessage,
    send
  } = props.chat

  function getMessageDate(messageDate) {
    const difference = (Date.now() - messageDate.getTime()) / (1000 * 3600 * 24)
    if (difference < 1) {
      return `${messageDate.getHours()}:${messageDate.getMinutes()}`
    }
    if (difference < 7) {
      return ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'][messageDate.getDay()]
    }
    if (difference < 365) {
      return `${messageDate.getDate()}.${messageDate.getMonth()}`
    } else {
      return `${messageDate.getDate()}.${messageDate.getMonth()}.${messageDate.getFullYear()}`
    }

  }
  console.log(getMessageDate(send));



  return (
    <li key={id}>
      <Chat>
        <ChatAvatar>
          <Avatar src={avatar} alt={status} />
          {status && <Online />}
        </ChatAvatar>
        <ChatMessage>
          <MessageInfo>
            <Author>
              {userName}
            </Author>
            <Message>
              {`${amIAuthor ? 'You' : userName}: ${lastMessage}`}
            </Message>
          </MessageInfo>
          <Time>
            {getMessageDate(send)}
          </Time>
        </ChatMessage>
      </Chat>
    </li>
  );
}

export default Contact;
