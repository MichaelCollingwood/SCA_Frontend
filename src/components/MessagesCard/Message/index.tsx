import * as React from "react";
import { MessageContent } from "../../../pages/messages/[peerId]";
import {
  Button,
  ListItem,
  ListItemText,
  Stack,
  Table,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { red, green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import sendMessage from "../../../client/sendMessage";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Message = (props: MessageContent) => {
  const { text, sources, encryptedHashes } = props;
  const [open, setOpen] = React.useState(false);
  const [peerId, setPeerId] = React.useState<string>();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack direction="row" justifyContent="center">
      <ListItem>
        <ListItemText
          primary={<Typography variant="body1">{text}</Typography>}
          secondary={
            <Stack direction="row" justifyContent="space-between">
              <Table size="small" aria-label="a dense table">
                {[...sources].reverse().map(({ name, timestamp, verif }) => (
                  <TableRow
                    sx={{
                      color: verif ? green[500] : red[500],
                    }}
                  >
                    <TableCell component="th">
                      {<Typography variant="caption">{name}</Typography>}
                    </TableCell>
                    <TableCell align="right">
                      {<Typography variant="caption">{timestamp}</Typography>}
                    </TableCell>
                  </TableRow>
                ))}
              </Table>
              <Button onClick={handleOpen}>Share</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Who would you like to share it with?
                  </Typography>
                  <TextField
                    placeholder="peer id"
                    onChange={(e) => setPeerId(e.target.value)}
                  />
                  <Button
                    onClick={() => {
                      peerId &&
                        sendMessage({
                          peerId,
                          signedMessage: {
                            message: {
                              data: text,
                              source_trace: sources.map((sourceContent) => ({
                                source: sourceContent.name,
                                timestamp: sourceContent.timestamp,
                              })),
                            },
                            encrypted_hashes: encryptedHashes,
                          },
                        });
                      setOpen(false);
                    }}
                  >
                    Share
                  </Button>
                </Box>
              </Modal>
            </Stack>
          }
        />
      </ListItem>
    </Stack>
  );
};

export default Message;
