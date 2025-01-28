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
import { useNavigate } from "react-router-dom";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdLocalGasStation,
  MdDirectionsCar,
  MdPeople,
  MdShoppingCart,
} from "react-icons/md";

const CarCard = ({ car, onAddToFavorites, favorites = [] }) => {
  const navigate = useNavigate();
  const isFavorite = Array.isArray(favorites) && favorites.some((fav) => fav.id === car.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking the favorite button
    onAddToFavorites(car);
  };

  return (
    <Card
      onClick={() => navigate(`/car/${car.id}`)} // Navigate to car details page
      sx={{
        width: 320,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        },
      }}
    >
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
            color: "#3563E9",
            fontWeight: 500,
          },
        }}
      />

      {/* Image */}
      <div
        style={{
          position: "relative",
          margin: "0 16px",
          backgroundColor: "white",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          style={{
            objectFit: "contain",
            height: "200px",
            width: "100%",
            backgroundColor: "white",
          }}
          image={process.env.PUBLIC_URL + car.images[0]}
          alt={car.name}
        />
      </div>

      {/* Specifications */}
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          paddingTop: "16px",
          paddingBottom: "8px",
        }}
      >
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
          <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
            ${car.price}
          </Typography>
          <Typography variant="body2" component="span" sx={{ color: "#636e72", ml: 1 }}>
            /day
          </Typography>
        </div>
        <Button
          variant="contained"
          startIcon={<MdShoppingCart />}
          sx={{
            bgcolor: "#3563E9",
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
