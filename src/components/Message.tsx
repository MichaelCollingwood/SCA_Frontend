import * as React from 'react';
import { MessageContent } from "../pages/messages/[peerId]";
import { Avatar, ListItem, ListItemAvatar, ListItemText, Stack, Table, TableCell, TableRow, Typography } from '@mui/material';
import { red, green, blue } from '@mui/material/colors';

const Message = (props: MessageContent) => {
    const { text, sources } = props;

    return (
        <Stack direction="row" justifyContent="center">
            <ListItem>
                <ListItemText
                    primary={<Typography variant="body1">{text}</Typography>}
                    secondary={
                        <Table size="small" aria-label="a dense table">
                            {[...sources].reverse().map(({ name, timestamp, verif }) => (<TableRow sx={{
                                color: (verif ? green[600] : red[500])
                            }}>
                                <TableCell component='th'>{<Typography variant="caption">{name}</Typography>}</TableCell>
                                <TableCell align="right">{<Typography variant="caption">{timestamp}</Typography>}</TableCell>
                            </TableRow>))}
                        </Table>
                    }
                    sx={{ bgcolor: blue[50], borderRadius: 2, padding: 2 }}
                />
            </ListItem>
        </Stack>
    )
}

export default Message;
