import { MessageContent } from "../pages/messages/[peerId]";

export type FetchedMessage = {
  signed_message: {
    message: {
      data: string;
      source_trace: {
        source: string;
        timestamp: string;
      }[];
    };
    encrypted_hashes: string[];
  };
  verifs: boolean[];
};

const fetchMessages = async (peerId: string): Promise<FetchedMessage[]> => {
  const response = await fetch("http://localhost:8000/" + peerId);

  return await response.json();
};

export default fetchMessages;
