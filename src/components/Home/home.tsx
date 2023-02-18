import React from 'react';
import { fontSize, styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import images from '../../assets/images/images.jpg'

interface Props{
    title: string;
}


//Create styled elements with styled from mui/systems
const Root = styled('div')({
    padding: 0,
    margin: 0
})

const NavbarContainer = styled ('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black'
})

const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})

const LogoA = styled(Link)({
    color: 'Purple',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontFamily: 'Lucida Sans',
    fontSize: '1.5em',
    padding: '0.5em'
})

const LogoNavigation = styled('ul')({
    listStyle: 'none',
    textTranform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'

})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'Purple',
    fontSize: '2em'
})

const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute'
})


const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    '& h1': {
        fontSize: '5em',
        color: 'Gray'
    }
})



export const Home = ( props:Props) => {
    return ( 
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA to ="/">Come Check our Heroes</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to = "/">Home</NavA>
                    </li>
                    <li>
                        <NavA to = "/dashboard">Dashboard</NavA>
                    </li>
                    <li>
                        <NavA to = "/signin">Sign In</NavA>
                    </li>
                    <li>
                        <NavA to = "/signup">Sign Up</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>Heroe's are awesome!</p>
                    <Button color='secondary' variant='contained' component={Link} to="/dashboard">Check it out</Button>
                </MainText>
            </Main>
        </Root>
    )
}