// simple footer component using mui 
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Footer() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <Box
        component="footer"
        sx={{
            py: 3,
            px: isMobile ? 0 : 3,
            mt: 'auto',
            backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
        }}
        >
        <Container maxWidth="lg">
            <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            <Link color="inherit" href="https://mui.com/">
                PELS 
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            </Typography>
        </Container>
        </Box>
    );
}
    