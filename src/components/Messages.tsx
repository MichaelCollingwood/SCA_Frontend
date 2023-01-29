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
            maxWidth: 540,
            maxHeight: 540,
            overflow: 'auto',
            bgcolor: 'background.paper',
            padding: 0,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 2,
            marginBottom: 2,
        }}>
            { messages && [...messages].reverse().map((message) => <Message {...message}/>) }
        </List>
    )
}