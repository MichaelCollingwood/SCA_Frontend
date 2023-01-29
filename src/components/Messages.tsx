import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { MessageContent } from "../pages/messages/[peerId]"
import Message from "./Message"

type MessagesProps = {
    messages?: MessageContent[];
}

export function Messages({ messages }: MessagesProps) {

    return (
        <List sx={{ width: '100%', maxWidth: 520, bgcolor: 'background.paper' }}>
            { messages && [...messages].reverse().map((message) => <Message {...message}/>) }
        </List>
    )
}