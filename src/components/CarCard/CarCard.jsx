import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdLocalGasStation,
  MdDirectionsCar,
  MdPeople,
  MdShoppingCart,
} from "react-icons/md";

const CarCard = ({ car, onAddToFavorites, favorites = [] }) => {
  const isFavorite = Array.isArray(favorites) && favorites.some((fav) => fav.id === car.id);

  const handleFavoriteClick = () => {
    onAddToFavorites(car);
  };

  return (
    <Card
      sx={{
        width: 320,
        height: 420,
        position: "relative",
        overflow: "visible",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        },
      }}
    >
      {/* Header with Favorite */}
      <CardHeader
        title={car.name}
        subheader={car.type}
        action={
          <IconButton onClick={handleFavoriteClick}>
            {isFavorite ? (
              <MdFavorite size={24} color="#ff4757" />
            ) : (
              <MdFavoriteBorder size={24} color="#636e72" />
            )}
          </IconButton>
        }
        sx={{
          pb: 0,
          "& .MuiCardHeader-subheader": {
            color: "#0984e3",
            fontWeight: 500,
          },
        }}
      />

      {/* Image with Fade Effect */}
      <div
        style={{
          position: "relative",
          margin: "0 16px",
          backgroundColor: "white", // Set the background color to white
          borderRadius: "8px", // Optional: Keep a rounded border for aesthetics
          overflow: "hidden", // Ensure no overflow beyond the container
        }}
      >
        <CardMedia
          component="img"
          style={{
            objectFit: "contain", // Prevent cropping
            height: "200px", // Balanced height for the image
            width: "100%",
            backgroundColor: "white", // Ensure the background of the image area is white
          }}
          image={process.env.PUBLIC_URL + car.images[0]}
          alt={car.name}
        />
      </div>

      {/* Specification Icons */}
      <CardContent sx={{ display: "flex", gap: 3, pt: 2, pb: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <MdLocalGasStation size={20} color="#636e72" />
          <Typography variant="body2" color="text.secondary">
            {car.gasoline}L
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <MdDirectionsCar size={20} color="#636e72" />
          <Typography variant="body2" color="text.secondary">
            {car.steering}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <MdPeople size={20} color="#636e72" />
          <Typography variant="body2" color="text.secondary">
            {car.capacity}
          </Typography>
        </div>
      </CardContent>

      {/* Price & Rent Button */}
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <div>
          <Typography
            variant="h6"
            component="span"
            sx={{ fontWeight: 700 }}
          >
            ${car.price}
          </Typography>
          <Typography
            variant="body2"
            component="span"
            sx={{ color: "#636e72", ml: 1 }}
          >
            /day
          </Typography>
        </div>
        <Button
          variant="contained"
          startIcon={<MdShoppingCart />}
          sx={{
            bgcolor: "#0984e3",
            "&:hover": { bgcolor: "#0872c4" },
            borderRadius: "20px",
            px: 3,
            textTransform: "none",
          }}
        >
          Rent Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default CarCard;
