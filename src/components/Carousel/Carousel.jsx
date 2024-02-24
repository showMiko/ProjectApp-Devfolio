import { Box, Container, Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({images}) => {
  return (
    <Carousel>
      {images.map((image, index) => (
      <Container >
        <img src={image} alt="Image" />
      </Container>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
