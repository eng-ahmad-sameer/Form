import { Typography, Box } from "@mui/material";
import React from "react";

function FinishPage() {
  return (
    <Box class="finishPage">
      <Typography variant="h4" align="center" sx={{ color: "#ed1c24" }}>
        Form has been successfully submitted
      </Typography>
      <Typography variant="subtitle-1" align="center">
        You will get notifications of the approval process on your email
      </Typography>
    </Box>
  );
}

export default FinishPage;
