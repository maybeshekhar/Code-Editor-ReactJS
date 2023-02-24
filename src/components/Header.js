import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const Container = styled(AppBar)`
   background: #060606;
   height: 9vh;
`

const Header = () => {
  return (
    <Container position='static'>
        <Toolbar>
          <Typography 
          variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'beige',
              textDecoration: 'none',
            }}
            >
          Code Arena
          </Typography>
        </Toolbar>
    </Container>
  )
}

export default Header