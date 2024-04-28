import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const MessageBubble = ({ isUser, text, timestamp, avatarUrl }) => {
  return (
    <Box
      display="flex"
      flexDirection={isUser ? 'row-reverse' : 'row'} // Align avatar on the opposite side for the user's messages
      alignItems="flex-start"
      mb={4}
      gap="10px"
    >
      {avatarUrl && (
         <Box mr={isUser ? 0 : 1} ml={isUser ? 1 : 0}> 
          <img src={avatarUrl} alt="Avatar" width="40px" height="40px" />
        </Box>
      )}
      <Box
        borderRadius="15px"
        color="#120F43"
        p={3}
        maxWidth="70%"
        boxShadow="14px 27px 45px 4px #7090B033"
      >
        <Text fontSize="md" fontWeight="500" lineHeight="1.4">
          {text}
        </Text>
        <Text fontSize="xs" mt={1} opacity={0.6} textAlign="end">
          {timestamp}
        </Text>
      </Box>
    </Box>
  );
};

export default MessageBubble;
