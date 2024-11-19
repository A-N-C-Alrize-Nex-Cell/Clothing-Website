import React from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Nav = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const NavList = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  padding: 0,
  margin: 0,
});

const NavItem = styled('li')({
  margin: '0 10px',
});

const NavLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  fontSize: '1em',
  transition: 'color 0.3s ease, background-color 0.3s ease',
  padding: '10px 15px',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FF5733',
  },
});

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#FF5733' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Clothing Website
          </Typography>
          <Nav>
            <NavList>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/shop">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/cart">Cart</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
            </NavList>
          </Nav>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
