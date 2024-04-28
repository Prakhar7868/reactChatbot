// ImageBubble.js
import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const ImageBubble = ({ imageUrl, text,avatarUrl,timestamp }) => {
  return (
    <Box display="flex">
    {avatarUrl && (
      <Box mr={2}> {/* Adjust the margin as needed */}
        <img src={avatarUrl} alt="Avatar" width="40px" height="40px" />
      </Box>
    )}
    <Box borderRadius="15px" bg="#E2E8F0" p={3} mb={2} maxW="70%" alignSelf="flex-start" boxShadow="14px 27px 45px 4px #7090B033">
      {text && <p>{text}</p>} {/* Display text if provided */}
      <Image src={imageUrl} alt="Image" boxSize="150px"/>
      <Text fontSize="xs" mt={1} opacity={0.6} textAlign="end">
          {timestamp}
        </Text>
    </Box>
    </Box>
  );
};

export default ImageBubble;
