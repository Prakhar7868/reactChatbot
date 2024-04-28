import React from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

const ChoiceBubble = ({ timestamp, options, onSelect, avatarUrl }) => {
  // Splitting options into two arrays
  const pizzaAndFriesOptions = options.filter(option => option.key !== "Sandwich");
  const sandwichOption = options.find(option => option.key === "Sandwich");

  return (
    <Box display="flex">
    {avatarUrl && (
      <Box mr={2}> {/* Adjust the margin as needed */}
        <img src={avatarUrl} alt="Avatar" width="40px" height="40px" />
      </Box>
    )}
    <Box borderRadius="15px" bg="#F7F9FB" p={3} mb={2} maxW="70%" alignSelf="flex-start">
      <Text fontSize="md" mb={2}>
        What would you like to order? {/* Displaying the text here */}
      </Text>
      <Flex flexWrap="wrap">
        {/* Render "Pizza" and "Fries" buttons in one line */}
        {pizzaAndFriesOptions.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            color="#1B2559"
            onClick={() => onSelect(option.key)}
            mb={2}
            mr={2}
            width={{ base: '100%', sm: '45%' }} // Adjust width responsively
            borderRadius="45px"
            _hover={{
              background: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)',
              color: "white",
            }}
          >
            {option.value}
          </Button>
        ))}
      </Flex>
      {/* Render "Sandwich" button in a new line */}
      <Flex>
        <Button
          variant="outline"
          color="#1B2559"
          onClick={() => onSelect(sandwichOption.key)}
          mb={2}
          width="95%"
          borderRadius="45px"
          _hover={{
            background: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)',
            color: 'white',
          }}
        >
          {sandwichOption.value}
        </Button>
      </Flex>
      <Text fontSize="xs" mt={1} opacity={0.6} textAlign="end">
          {timestamp}
        </Text>
    </Box>
    </Box>
  );
};

export default ChoiceBubble;
