import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import carsData from "../../car_data/cars.json";
import { Box, Typography, Button, CardMedia, IconButton } from "@mui/material";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Rating from "@mui/material/Rating";
import styles from "./CarDetails.module.css";
import bgStyle from "../../contexts/bg.png"

const CarDetails = ({ favorites, onAddToFavorites }) => {
    const { id } = useParams(); // Extract car ID from the URL
    const [car, setCar] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        const foundCar = carsData.find((c) => c.id === parseInt(id));
        if (foundCar) {
            setCar(foundCar);
            setSelectedImage(foundCar.images[0]); // Set default image
        }
    }, [id]);

    if (!car) return <Typography variant="h5">Car not found</Typography>;

    const isFavorite = favorites.some((fav) => fav.id === car.id);

    return (
        <Box className={styles.container}>
            {/* 🔹 NEW: Car Details Header */}
            <Box className={styles.carDetailsHeader}>
                <Typography variant="h5" className={styles.headerText}>
                    Car Details
                </Typography>
            </Box>

            {/* Car Details Content (Image + Description) */}
            <Box className={styles.content}>
                {/* Left Section - Image */}
                <Box className={styles.imageSection}>
                    <Box className={styles.imageContainer} sx={{
                        backgroundImage: `url(${bgStyle})`,
                        backgroundSize: '442px',
                        backgroundRepeat: 'repeat',
                    }}>
                        <Typography variant="h5" className={styles.imageTitle}>
                            Sports car with the best design and acceleration
                        </Typography>
                        <Typography variant="body2" className={styles.imageDescription}>
                            Safety and comfort while driving a futuristic and elegant sports car
                        </Typography>
                        <CardMedia
                            component="img"
                            image={process.env.PUBLIC_URL + selectedImage}
                            alt={car.name}
                            className={styles.mainImage}
                        />
                    </Box>

                    {/* Thumbnails */}
                    <Box className={styles.thumbnailContainer}>
                        {car.images.slice(0, 3).map((img, index) => (
                            <CardMedia
                                key={index}
                                component="img"
                                image={process.env.PUBLIC_URL + img}
                                alt={`${car.name} thumbnail`}
                                className={`${styles.thumbnail} ${selectedImage === img ? styles.activeThumbnail : ""
                                    }`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </Box>
                </Box>

                {/* Right Section - Car Details */}
                <Box className={styles.detailsSection}>
                    <Typography variant="h4">{car.name}</Typography>

                    {/* Rating */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Rating name="read-only" value={car.stars} readOnly />
                        <Typography variant="body2" color="textSecondary">
                            ({car.reviews} Reviews)
                        </Typography>
                    </Box>

                    <Typography variant="body1" className={styles.description}>
                        {car.details}
                    </Typography>

                    {/* Car Specifications */}
                    <Box className={styles.specs}>
                        <Typography>Type: <b>{car.type}</b></Typography>
                        <Typography>Steering: <b>{car.steering}</b></Typography>
                        <Typography>Capacity: <b>{car.capacity} People</b></Typography>
                        <Typography>Gasoline: <b>{car.gasoline}L</b></Typography>
                    </Box>

                    {/* Favorite Button */}
                    <IconButton onClick={() => onAddToFavorites(car)}>
                        {isFavorite ? <MdFavorite size={30} color="#ff4757" /> : <MdFavoriteBorder size={30} />}
                    </IconButton>

                    {/* Price & Rent Button */}
                    <Box className={styles.priceSection}>
                        <Typography variant="h5">${car.price}.00/day</Typography>
                        <Button variant="contained" color="primary" disabled>
                            Rent Now
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CarDetails;
