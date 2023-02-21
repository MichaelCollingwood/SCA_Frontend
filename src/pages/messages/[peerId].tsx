import { Stack, Button, Card, Paper, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import fetchMessages, { FetchedMessage } from "../../client/fetchMessages";
import sendMessage from "../../client/sendMessage";
import MessagesCard from "../../components/MessagesCard";

export type MessageContent = {
  text: string;
  sources: {
    name: string;
    timestamp: string;
    verif: boolean;
  }[];
  encryptedHashes: string[];
};

export const parseFetchedMessages = (
  fetchedMessages: FetchedMessage[]
): MessageContent[] =>
  fetchedMessages.map((fetchedMessage) => ({
    text: fetchedMessage.signed_message.message.data,
    sources: fetchedMessage.signed_message.message.source_trace.map(
      (trace, index) => ({
        name: trace.source,
        timestamp: trace.timestamp,
        verif: fetchedMessage.verifs[fetchedMessage.verifs.length - 1 - index],
      })
    ),
    encryptedHashes: fetchedMessage.signed_message.encrypted_hashes,
  }));

// Use Auth from session storage

export default function MessagePage() {
  const router = useRouter();
  const [messages, setMessages] = useState<MessageContent[]>([]);
  const [reply, setReply] = useState<string>();
  const peerId = router.query["peerId"] as string;

  useEffect(() => {
    peerId &&
      fetchMessages(peerId as string)
        .then((fetchedMessages) => {
          setMessages(parseFetchedMessages(fetchedMessages));
        })
        .catch((error) => {
          console.log(error);
          router.push("/error");
        });
  }, [peerId]);

  return (
    <div>
      <Messages messages={messages} />
      <Stack direction="row" spacing={2}>
        <TextField
          onChange={(v) => setReply(v.target.value)}
          placeholder="Reply"
        />
        <Button
          onClick={() =>
            sendMessage({
              peerId,
              signedMessage: {
                message: {
                  data: reply ?? "",
                  source_trace: [],
                },
                encrypted_hashes: [],
              },
            })
          }
        >
          Send
        </Button>
      </Stack>
    </div>
  );
}
