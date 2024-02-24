import React from 'react';
import { Box } from '@chakra-ui/react';
import SearchBar from '../../../components/Searchbar/Searchbar';
import SpecificNavbar from '../../../components/wholesaler/SpecificNavbar/specificNavbar';
import RetailerCards from '../../../components/wholesalerCard/RetailerCards';

const RetailerLanding = () => {
  const shopData = [
    {
      name: 'The New Shop 1',
      contactNumber: '1234567890',
      email: 'shop1@example.com',
      productType: 'Spectacles',
      location: 'Barabazar',
      reviewStars: 4,
    },
    {
      name: 'The New Shop 2',
      contactNumber: '9876543210',
      email: 'shop2@example.com',
      productType: 'Sunglasses',
      location: 'Shopping Mall',
      reviewStars: 5,
    },
    {
      name: 'The New Shop 3',
      contactNumber: '5555555555',
      email: 'shop3@example.com',
      productType: 'Watches',
      location: 'Downtown',
      reviewStars: 3,
    },
    {
      name: 'The New Shop 4',
      contactNumber: '1111111111',
      email: 'shop4@example.com',
      productType: 'Jewelry',
      location: 'City Center',
      reviewStars: 4,
    },
    {
      name: 'The New Shop 5',
      contactNumber: '2222222222',
      email: 'shop5@example.com',
      productType: 'Handbags',
      location: 'Fashion Street',
      reviewStars: 4,
    },
    {
      name: 'The New Shop 6',
      contactNumber: '3333333333',
      email: 'shop6@example.com',
      productType: 'Shoes',
      location: 'Mall Road',
      reviewStars: 5,
    },
    {
      name: 'The New Shop 7',
      contactNumber: '4444444444',
      email: 'shop7@example.com',
      productType: 'Perfumes',
      location: 'Luxury Avenue',
      reviewStars: 3,
    },
    {
      name: 'The New Shop 8',
      contactNumber: '6666666666',
      email: 'shop8@example.com',
      productType: 'Electronics',
      location: 'Tech Plaza',
      reviewStars: 4,
    },
    {
      name: 'The New Shop 8',
      contactNumber: '6666666666',
      email: 'shop8@example.com',
      productType: 'Electronics',
      location: 'Tech Plaza',
      reviewStars: 4,
    }
    // Add more shop data objects to reach a total of 10 cards
  ];

  return (
    <Box display="flex" flexDir="column" justifyContent="center">
      <SpecificNavbar />
      <SearchBar />
      <Box display="flex" flexDir="column" justifyContent="center" alignItems="center">
        <Box width="80%" height="3px" borderRadius="20px" backgroundColor="black"></Box>
      </Box>
      <RetailerCards shopData={shopData} />
    </Box>
  );
}

export default RetailerLanding;
