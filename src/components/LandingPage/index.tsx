import { TextField, Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import * as Styled from "./styles";

const LandingPage = () => {
  const router = useRouter();

  const [peerId, setPeerId] = useState<string>();

  return (
    <Styled.SearchCard>
      <Stack direction="row" spacing={2}>
        <TextField
          placeholder="friend id"
          onChange={(e) => setPeerId(e.target.value)}
        />
        <Button
          onClick={() => router.push(`messages/${peerId}`)}
          color="primary"
          variant="outlined"
        >
          Open
        </Button>
      </Stack>
    </Styled.SearchCard>
  );
};

export default LandingPage;
