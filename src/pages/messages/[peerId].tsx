import { Stack, Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import fetchMessages, { FetchedMessage } from '../../client/fetchMessages';
import { Header } from '../../components/Head';
import { Messages } from '../../components/Messages';
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

    useEffect(() => {
        console.log('router.query peerId', router.query['peerId'])
        fetchMessages(router.query['peerId'] as string)
            .then((fetchedMessages) => {
                setMessages(
                    parseFetchedMessages(fetchedMessages)
                )
            })
            .catch((error) => {
                console.log(error);
                router.push('/error');
            });
    }, [router.query['peerId']])

    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <Navbar />
            <Messages messages={messages}/>
        </div>
    );
}