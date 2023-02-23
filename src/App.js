import "./App.css";
import FormStepper from "./Components/FormStepper";
import { Paper, Container, Box, Typography } from "@mui/material";
function App() {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        my: 4,
        borderRadius: "4px",
        border: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      <Box
        sx={{
          my: 5,
          mb: 8,
        }}
        class="responsive-header"
      >
        <Typography variant="h4" align="center">
          PERSONNEL HIRING REQUEST
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://www.ooredoo.ps/cached_uploads/download/2022/08/18/ooredoo-logo-2022-1660844757.svg"
            width="200"
          />
        </Box>
      </Box>
      <Box sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <FormStepper />
      </Box>
    </Container>
  );
}

export default App;
