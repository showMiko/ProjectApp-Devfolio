import { Box, Image, IconButton, Flex, useMediaQuery } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import image1 from "../../../assets/Review.png";
import image2 from "../../../assets/Review.png";
import image3 from "../../../assets/Review.png";
import image4 from "../../../assets/Review.png";
import image5 from "../../../assets/Review.png";
import image6 from "../../../assets/Review.png";

const CustomerReview = () => {
  const images = [image1, image2, image3, image4, image5, image6];
//   const imagesLoop = [...images, ...images];
  const imagesLoop = [...images, ...images,];
  const containerRef = useRef();
  const [isLargeScreen] = useMediaQuery("(min-width: 768px)");

  const scrollToPosition = (scrollOffset) => {
    const currentPosition = containerRef.current.scrollLeft;
    const totalWidth = containerRef.current.scrollWidth;
    const containerWidth = containerRef.current.clientWidth;

    if (currentPosition + containerWidth + scrollOffset >= totalWidth) {
      containerRef.current.scrollTo({
        left: 0, 
        behavior: "smooth"
      });
    } else {
      containerRef.current.scrollTo({
        left: currentPosition + scrollOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <Box p="6" position="relative">
      <Flex alignItems="center" position="relative" overflowX="auto">
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous"
          onClick={() => scrollToPosition(-200)}
          display={!isLargeScreen && "none"}
          position="absolute"
          left="0"
          top="50%"
          transform="translateY(-50%)"
          zIndex="999"
          bgColor="rgba(255, 255, 255, 0.5)"
        />
        <Box
          ref={containerRef}
          display="flex"
          width="100%"
          whiteSpace="nowrap"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            overflowX: "scroll" 
          }}
        >
          {imagesLoop.map((imageUrl, index) => (
            <Box key={index} minWidth="400px" height="400px" marginRight="10">
              <Image
                src={imageUrl}
                alt={`Image ${index}`}
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Box>
          ))}
        </Box>
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next"
          onClick={() => scrollToPosition(200)}
          display={!isLargeScreen && "none"}
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
          zIndex="999"
          bgColor="rgba(255, 255, 255, 0.5)"
        />
      </Flex>
    </Box>
  );
};

export default CustomerReview;
