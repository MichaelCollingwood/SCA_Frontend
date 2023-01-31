import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { MessageContent } from "../pages/messages/[peerId]"
import Message from "./Message"

type MessagesProps = {
    messages?: MessageContent[];
}

export function Messages({ messages }: MessagesProps) {

    return (
        <List sx={{
            bgcolor: 'background.paper',
            padding: 0,
            margin: 2,
        }}>
            { messages && [...messages].reverse().map((message) => <Message {...message}/>) }
        </List>
    )
}