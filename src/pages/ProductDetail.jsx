
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const products = [
  { id: 1, name: "Wireless Headphones", price: 299000 },
  { id: 2, name: "Mechanical Keyboard", price: 450000 },
  { id: 3, name: "Gaming Mouse", price: 175000 },
];

function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Product Not Found
        </Typography>

        <Button component={Link} to="/products" variant="contained">
          Back to Products
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", px: 3, py: 5 }}>
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>

          <Typography
            variant="h5"
            color="primary"
            sx={{ mb: 2 }}
          >
            Rp {product.price.toLocaleString("id-ID")}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Product ID: {product.id}
          </Typography>

          <Button
            component={Link}
            to="/products"
            variant="contained"
          >
            Back to Products
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductDetail;
