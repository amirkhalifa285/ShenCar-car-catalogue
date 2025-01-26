// CarCard.jsx
import { Card, CardHeader, CardMedia, CardContent, CardActions, Button, Typography, IconButton } from '@mui/material';
import { MdFavorite, MdLocalGasStation, MdDirectionsCar, MdPeople, MdShoppingCart } from "react-icons/md";
import { styled } from '@mui/system';

const FadeOverlay = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '40%',
  background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%)',
});

const CarCard = ({ car }) => {
  return (
    <Card sx={{ 
      width: 320, 
      height: 420,
      position: 'relative',
      overflow: 'visible',
      '&:hover': {
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
      }
    }}>
      {/* Header with Favorite */}
      <CardHeader
        title={car.name}
        subheader={car.type}
        action={
          <IconButton sx={{ color: '#ff4757' }}>
            <MdFavorite size={24} />
          </IconButton>
        }
        sx={{
          pb: 0,
          '& .MuiCardHeader-subheader': {
            color: '#0984e3',
            fontWeight: 500
          }
        }}
      />

      {/* Image with Fade Effect */}
      <div style={{ position: 'relative', margin: '0 16px' }}>
        <CardMedia
          component="img"
          height="200"
          image={process.env.PUBLIC_URL + car.images[0]}
          alt={car.name}
          sx={{ borderRadius: '8px' }}
        />
        <FadeOverlay />
      </div>

      {/* Specification Icons */}
      <CardContent sx={{ display: 'flex', gap: 3, pt: 2, pb: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <MdLocalGasStation size={20} color="#636e72" />
          <Typography variant="body2" color="text.secondary">
            {car.gasoline}L
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <MdDirectionsCar size={20} color="#636e72" />
          <Typography variant="body2" color="text.secondary">
            {car.steering}
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <MdPeople size={20} color="#636e72" />
          <Typography variant="body2" color="text.secondary">
            {car.capacity}
          </Typography>
        </div>
      </CardContent>

      {/* Price & Rent Button */}
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <div>
          <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
            ${car.price}
          </Typography>
          <Typography variant="body2" component="span" sx={{ color: '#636e72', ml: 1 }}>
            /day
          </Typography>
        </div>
        <Button 
          variant="contained" 
          startIcon={<MdShoppingCart />}
          sx={{
            bgcolor: '#0984e3',
            '&:hover': { bgcolor: '#0872c4' },
            borderRadius: '20px',
            px: 3,
            textTransform: 'none'
          }}
        >
          Rent Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default CarCard;