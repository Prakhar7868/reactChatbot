import React from 'react';
import { Box } from '@chakra-ui/react';
import Logo from '../assets/Group.jpg';

const Header = () => {
    return (
        <Box display="flex" alignItems="center" mt={6} ml={4}>
            <img src={Logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
        </Box>
    );
};

export default Header;
