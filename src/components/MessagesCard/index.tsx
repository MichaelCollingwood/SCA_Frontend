import { List, Paper, styled } from "@mui/material";
import { MessageContent } from "../../pages/messages/[peerId]";
import Message from "./Message";

const Messages = (messages: MessageContent[]) => {
  <List>
    {messages &&
      [...messages].reverse().map((message) => <Message {...message} />)}
  </List>;
};

export default Messages;
