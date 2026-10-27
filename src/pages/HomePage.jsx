
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 8, md: 12 },
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
        >
          Welcome to Product Catalog
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Discover our collection of products.
        </Typography>

        <Button
          component={Link}
          to="/products"
          variant="contained"
          size="large"
        >
          Browse Products
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
