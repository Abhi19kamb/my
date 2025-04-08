import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Chip,
  Button,
  ImageList,
  ImageListItem,
} from '@mui/material';
import axios from 'axios';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/properties/${id}`);
        setProperty(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching property:', error);
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (!property) {
    return (
      <Container>
        <Typography>Property not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <ImageList cols={1} rowHeight={400}>
            {property.images.map((image, index) => (
              <ImageListItem key={index}>
                <img
                  src={image}
                  alt={`${property.title} - Image ${index + 1}`}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              {property.title}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              ${property.price.toLocaleString()}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {property.location.address}
              <br />
              {property.location.city}, {property.location.state} {property.location.zipCode}
            </Typography>

            <Box sx={{ my: 2 }}>
              <Chip
                label={property.propertyType}
                color="primary"
                variant="outlined"
                sx={{ mr: 1 }}
              />
              <Chip
                label={property.status}
                color="secondary"
                variant="outlined"
                sx={{ mr: 1 }}
              />
            </Box>

            <Grid container spacing={2} sx={{ my: 2 }}>
              <Grid item xs={4}>
                <Typography variant="body1">
                  <strong>{property.bedrooms}</strong> beds
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1">
                  <strong>{property.bathrooms}</strong> baths
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1">
                  <strong>{property.squareFeet.toLocaleString()}</strong> sqft
                </Typography>
              </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Description
            </Typography>
            <Typography variant="body1" paragraph>
              {property.description}
            </Typography>

            <Typography variant="h6" gutterBottom>
              Features
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {property.features.map((feature, index) => (
                <Chip key={index} label={feature} />
              ))}
            </Box>

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              onClick={() => window.location.href = `mailto:contact@realestate.com?subject=Inquiry about ${property.title}`}
            >
              Contact Agent
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PropertyDetail; 