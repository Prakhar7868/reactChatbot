// ChatBox.js
import React, { useState, useRef, useEffect } from 'react';
import { VStack, Box, Flex, Input, Button, Text, Img } from '@chakra-ui/react';
import MessageBubble from './MessageBubble';
import ChoiceBubble from './ChoiceBubble';
import ImageBubble from './ImageBubble';
import activeIcon from '../assets/Frame 44 (1).svg';
import disableIcon from '../assets/Frame 44 (3).svg';
import chatBotImage from '../assets/Clip path group.png';
import userAvatar from '../assets/Group 33088 (1).svg';
import responseAvatar from '../assets/Group 33091.svg';

const ChatBox = ({ messages, sendMessage }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();
  const chatBoxRef = useRef();
  const [showDefaultMessage, setShowDefaultMessage] = useState(true);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') {
      return;
    }

    sendMessage(inputValue);
    setInputValue('');

    if (showDefaultMessage) {
      setShowDefaultMessage(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    if (messages.length > 0) {
      inputRef.current.focus();
    }
  }, [messages]);

  return (
    <VStack>
      <Box display="flex" alignItems="center" justifyContent="center" mt={6} gap={2}>
        <Box align='center' display="flex" boxShadow="14px 27px 45px 4px #7090B033" borderRadius="15px" p={2}>
          <Img src={activeIcon} alt='active-icon' width={['35%', '25%']} />
          <Text fontWeight='600' fontSize={['md', '14px']} ml={1}>GPT-3.5</Text>
        </Box>
        <Box align='center' display="flex" opacity={0.5}>
          <Img src={disableIcon} alt='active-icon' width={['35%', '25%']} />
          <Text fontWeight='600' fontSize={['md', '14px']} ml={1} color="#120F43">GPT-4</Text>
        </Box>
      </Box>

      <VStack
        w={['95%', '80%', '60%', '40%']}
        h="80vh"
        mx="auto"
        mt="2vh"
        p={4}
        alignItems="normal"
        borderRadius="md"
        position="relative"
        overflowY="auto"
        ref={chatBoxRef}
        backgroundImage={chatBotImage}
        backgroundSize="150px 200px"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" 
      >
        {messages.map((message, index) => {
          if (message.choice) {
            return (
              <ChoiceBubble
                key={index}
                text={message.text}
                options={message.choice}
                onSelect={(choice) => sendMessage(choice)}
                timestamp={getCurrentTime()}
                avatarUrl={responseAvatar}
              />
            );
          } else if (message.image) {
            return (
              <ImageBubble
                key={index}
                imageUrl={message.image}
                text={message.text}
                timestamp={getCurrentTime()}
                avatarUrl={responseAvatar}
              />
            );
          } else {
            return (
              <MessageBubble
                key={index}
                isUser={message.isUser}
                text={message.text}
                timestamp={getCurrentTime()}
                avatarUrl={message.isUser ? userAvatar : responseAvatar} 
              />
            );
          }
        })}

        <Box flex="1" />

        <Flex align="center" mt={4} width='100%'>
          <Input
            backgroundColor='#ffffff'
            ref={inputRef}
            placeholder="Enter message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            borderRadius="45px"
          />
          <Button 
            ml={2}
            px={30}
            borderRadius="45px"
            background="linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)"
            boxShadow="0px 21px 27px -10px #603CFF7A"   
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Flex>
      </VStack>
    </VStack>
  );
};

export default ChatBox;
