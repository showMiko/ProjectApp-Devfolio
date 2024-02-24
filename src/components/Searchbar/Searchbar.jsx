import React from 'react';
import { InputGroup, Input, InputRightElement, Icon, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {
  return (
    <Box p="10">
    <InputGroup  >
      <Input
        type="text"
        placeholder="Search items of your choice"
        bg="#D9D9D9"
        borderRadius="full"
      />
      <InputRightElement mr="2" children={<Icon as={SearchIcon} color="gray.600" />} />
    </InputGroup>
    </Box>
  );
};

export default SearchBar;
