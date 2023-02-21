export type SignedMessage = {
  message: {
    data: string;
    source_trace: {
      source: string;
      timestamp: string;
    }[];
  };
  encrypted_hashes: string[];
};

export type SendMessageProps = {
  peerId: string;
  signedMessage: SignedMessage;
};

const sendMessage = async (props: SendMessageProps): Promise<void> => {
  const { peerId, signedMessage } = props;

  const response = await fetch("http://localhost:8000/" + peerId, {
    method: "POST",
    body: JSON.stringify(signedMessage),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};

export default sendMessage;
