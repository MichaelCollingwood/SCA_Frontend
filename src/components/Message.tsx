import * as React from 'react';
import { MessageContent } from "../pages/messages/[peerId]";
import { Avatar, ListItem, ListItemAvatar, ListItemText, Table, TableCell, TableRow } from '@mui/material';

const Message = (props: MessageContent) => {
    const { text, sources } = props;

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/TomCruise.jpeg" />
            </ListItemAvatar>
            <ListItemText
                primary={text}
                secondary={
                    <Table size="small" aria-label="a dense table">
                        {sources.map(({ name, timestamp, verif }) => (<TableRow>
                            <TableCell component='th'>{name}</TableCell>
                            <TableCell align="right">{timestamp}</TableCell>
                            <TableCell align="right">{(verif ? 'True' : 'False')}</TableCell>
                        </TableRow>))}
                    </Table>
                }
            />
        </ListItem>
    )
}

export default Message;
