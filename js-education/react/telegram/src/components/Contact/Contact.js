import React from "react";
import styled from "styled-components"

const Chat = styled.div`
padding: 3px;
display: flex;
border: 1px solid lightgray;
flex-direction: row;
align-items: center;
&:hover {
    background-color: lightgray;
  }
`
const ChatAvatar = styled.div`
margin: 5px;
position: relative;
display: flex;
align-items: center;
`
const Avatar = styled.img`
width: 70px;
height: 70px;
border-radius: 50%;
`
const Online = styled.div`
  background-color: green;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  bottom: 4px;
  right: 10px;
`;
const ChatMessage = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
position: relative;
bottom:10px;
`
const MessageInfo = styled.div`
margin: 0px 20px;
display:flex
flex-direction: column;
`
const Time = styled.p`
align-self: start;
margin: 4px 5px 0px 0px;
opacity: 0.5;
`
const Author = styled.h3`
margin: 0px 0px 0px 0px;
font-size: 18px;
`
const Message = styled.p`
margin: 7px 0px 0px 0px;
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
              {`${amIAuthor ? 'You:' : ''} ${lastMessage}`}
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
