import { Stack, Button, Card, Paper, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import fetchMessages, { FetchedMessage } from '../../client/fetchMessages';
import sendMessage from '../../client/sendMessage';
import { Header } from '../../components/Head';
import { Messages } from '../../components/Messages';
import MessagesCard from '../../components/MessagesCard';
import { Navbar } from '../../components/NavBar';

export type MessageContent = {
    text: string;
    sources: {
        name: string;
        timestamp: string;
        verif: boolean;
    }[];
};

export const parseFetchedMessages = (
    fetchedMessages: FetchedMessage[],
  ): MessageContent[] => fetchedMessages.map((fetchedMessage) => ({
      text: fetchedMessage.signed_message.message.data,
      sources: fetchedMessage.signed_message.message.source_trace.map((trace, index) => ({
        name: trace.source,
        timestamp: trace.timestamp,
        verif: fetchedMessage.verifs[index],
      })),
    }));

export default function MessagePage() {
    const router = useRouter();
    const [messages, setMessages] = useState<MessageContent[]>([])
    const [reply, setReply] = useState<string>()
    const peerId = router.query['peerId'] as string;

    useEffect(() => {
        peerId && fetchMessages(peerId as string)
            .then((fetchedMessages) => {
                setMessages(
                    parseFetchedMessages(fetchedMessages)
                )
            })
            .catch((error) => {
                console.log(error);
                router.push('/error');
            });
    }, [peerId])

    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <Navbar />
            <MessagesCard>
                <Messages messages={messages}/>
                <Stack direction='row' justifyContent='space-between'>
                    <TextField onChange={(v) => setReply(v.target.value)} placeholder='Reply' />
                    <Button onClick={() => sendMessage({
                        peerId,
                        signedMessage: {
                            message: {
                                data: reply ?? '',
                                source_trace: [],
                            },
                            encrypted_hashes: []
                        }
                    })}>Send</Button>
                </Stack>
            </MessagesCard>
        </div>
    );
}