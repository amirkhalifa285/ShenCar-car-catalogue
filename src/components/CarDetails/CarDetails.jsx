import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import carsData from "../../car_data/cars.json";
import { Box, Typography, Button, CardMedia, IconButton } from "@mui/material";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Rating from "@mui/material/Rating";
import bgImage from "../../contexts/bg.png"

const CarDetails = ({ favorites, onAddToFavorites }) => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const foundCar = carsData.find((c) => c.id === parseInt(id));
    if (foundCar) {
      setCar(foundCar);
      setSelectedImage(foundCar.images[0]);
    }
  }, [id]);

  if (!car) return <Typography variant="h5">Car not found</Typography>;

  const isFavorite = favorites.some((fav) => fav.id === car.id);

  return (
    <Box sx={{
        display: "flex",
        gap: "32px",
        alignItems: "stretch",
        paddingLeft: "32px",
        paddingRight: "32px",
        flexWrap: "wrap", // Allow wrapping for smaller screens
        minHeight: "auto", // Let content expand dynamically
      }}>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Car Details
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "2rem", alignItems: "stretch" }}>
        {/* Image Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "492px",
            minHeight: "auto",
            height: "100%",
            borderRadius: "10px 0 0 0",
          }}
        >
          {/* Main Image with Blue Background and Description */}
          <Box
            sx={{
              position: "relative",
              width: "468px",
              height: "360px",
              borderRadius: "10px 0 0 0",
              backgroundColor: "#3563E9", // Blue background
              backgroundImage: `url(${bgImage})`,
              color: "white",
              padding: "1.5rem",
              textAlign: "center",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Sports car with the best design and acceleration
            </Typography>
            <Typography variant="body2">
              Safety and comfort while driving a futuristic and elegant sports car
            </Typography>
            <CardMedia
              component="img"
              image={process.env.PUBLIC_URL + selectedImage}
              alt={car.name}
              sx={{
                width: "400px",
                height: "350px",
                objectFit: "contain",
                borderRadius: "10px 0 0 0",
              }}
            />
          </Box>

          {/* Thumbnails */}
          <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem", width: "468px" }}>
            {car.images.slice(0, 3).map((img, index) => (
              <Box
                key={index}
                sx={{
                  width: "148px",
                  height: "124px",
                  borderRadius: "10px 0 0 0",
                  overflow: "hidden",
                  backgroundColor: index === 0 ? "#3563E9" : "transparent",
                  backgroundImage: index === 0 ? `url(${bgImage})` : "none", // Blue background for first thumbnail
                  padding: "5px",
                  border:
                    selectedImage === img
                      ? "2px solid #3563E9"
                      : "2px solid transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setSelectedImage(img)}
              >
                <CardMedia
                  component="img"
                  image={process.env.PUBLIC_URL + img}
                  alt={`${car.name} thumbnail`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px 0 0 0",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Details Section */}
        <Box
          sx={{
            width: "492px",
            height: "508px",
            borderRadius: "10px 0 0 0",
            background: "#ffffff",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {car.name}
            </Typography>
            <IconButton onClick={() => onAddToFavorites(car)}>
              {isFavorite ? (
                <MdFavorite size={30} color="#ff4757" />
              ) : (
                <MdFavoriteBorder size={30} />
              )}
            </IconButton>
          </Box>

          {/* Rating */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Rating value={car.stars} readOnly precision={0.5} />
            <Typography variant="body2" sx={{ color: "#6b6b6b" }}>
              ({car.reviews} Reviews)
            </Typography>
          </Box>

          {/* Description */}
          <Typography variant="body1" sx={{ color: "#4a4a4a", lineHeight: 1.6 }}>
            {car.details}
          </Typography>

          {/* Specifications */}
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
            <Box>
              <Typography sx={{ color: "#8f8f8f", fontSize: "0.9rem" }}>Type Car</Typography>
              <Typography sx={{ fontWeight: 600, color: "#2d2d2d" }}>{car.type}</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#8f8f8f", fontSize: "0.9rem" }}>Steering</Typography>
              <Typography sx={{ fontWeight: 600, color: "#2d2d2d" }}>{car.steering}</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#8f8f8f", fontSize: "0.9rem" }}>Capacity</Typography>
              <Typography sx={{ fontWeight: 600, color: "#2d2d2d" }}>{car.capacity} People</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#8f8f8f", fontSize: "0.9rem" }}>Gasoline</Typography>
              <Typography sx={{ fontWeight: 600, color: "#2d2d2d" }}>{car.gasoline}L</Typography>
            </Box>
          </Box>

          {/* Bottom Section */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2rem" }}>
            <Box sx={{ display: "flex", alignItems: "baseline" }}>
              <Typography sx={{ fontSize: "1.75rem", fontWeight: 700, color: "#2d2d2d" }}>
                ${car.price}.00
              </Typography>
              <Typography sx={{ color: "#8f8f8f", marginLeft: "0.5rem" }}>/days</Typography>
            </Box>
            <Button variant="contained" sx={{ backgroundColor: "#3563E9", fontWeight: 600 }}>
              Rent Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarDetails;
