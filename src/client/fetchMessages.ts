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
    encrypted_hashes: number[];
  };
  verifs: boolean[];
};

export default async (peerId: string): Promise<FetchedMessage[]> => {
  const response = await fetch("http://localhost:8000/" + peerId);

  return await response.json();
};
