// App.js
import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ChatBox from './components/ChatBox';
import Header from './components/Header';

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (userMessage) => {
    const newMessages = [...messages, { text: userMessage, isUser: true }];
    setMessages(newMessages);

    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from the server');
      }

      const responseData = await response.json();

      // Handle different message types
      switch (responseData.data.type) {
        case 'text':
          setMessages([...newMessages, { text: responseData.data.text, isUser: false }]);
          break;
        case 'image':
          setMessages([...newMessages, { image: responseData.data.url, isUser: false }]);
          break;
        case 'choice':
          setMessages([...newMessages, { choice: responseData.data.options, isUser: false }]);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <ChakraProvider>
      <Header/>
      <ChatBox messages={messages} sendMessage={sendMessage} />
    </ChakraProvider>
  );
}

export default App;
