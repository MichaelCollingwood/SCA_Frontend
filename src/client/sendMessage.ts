export type SignedMessage = {
  message: {
    data: string;
    source_trace: {
      source: string;
      timestamp: string;
    }[];
  };
  encrypted_hashes: number[];
};

export type SendMessageProps = {
  peerId: string;
  signedMessage: SignedMessage;
};

const sendMessage = async (props: SendMessageProps): Promise<void> => {
  const { peerId, signedMessage } = props;

  console.log(peerId, signedMessage);

  const response = await fetch("http://localhost:8000/" + peerId, {
    method: "POST",
    body: JSON.stringify(signedMessage),
  });

  return await response.json();
};

export default sendMessage;
