
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        px: 2,
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        404
      </Typography>

      <Typography variant="h5" gutterBottom>
        Page Not Found
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Sorry, the page you are looking for does not exist.
      </Typography>

      <Button component={Link} to="/" variant="contained">
        Back to Home
      </Button>
    </Box>
  );
}

export default NotFound;
