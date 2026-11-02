import './Navigation.css';
import Button from '@mui/material/Button';
import { Icons } from '@shared/assets/svg/index';
import { NavLink } from 'react-router';
import { useState } from 'react';

export const Navigation = () => {
    const [active, setActive] = useState('home');

    const buttons = [
        { id: 'home', label: 'Home', to: '/' },
        { id: 'collection', label: 'Collection', to: '/collection' },
        { id: 'contact', label: 'Contact', to: '/contact' },
        { id: 'about', label: 'About', to: '/about' }
    ];
    const otherButtons = [
        { id: 'login', label: <Icons.LoginIcon />, to: '/login' },
        { id: 'like', label: <Icons.LikeIcon />, to: '/like' },
        { id: 'search', label: <Icons.SearchIcon />, to: '/search' },
        { id: 'busket', label: <Icons.BusketIcon />, to: '/busket' }
    ];

  return (
    <nav className='Navigation'>
        <div className='Navigation__main'>
            <a href='' className='Navigation__brandLogo'>
                <div className='Navigation__logo'>
                    <Icons.MainLogo />
                </div>
                <div className='Navigation__text'>
                    <div className='Navigation__text--main'>
                        ShopKart
                    </div>
                    <div className='Navigation__text--other'>
                        Online Store
                    </div>
                </div>
            </a>
            <div className='Navigation__buttons'>
                {buttons.map((btn) => (
                    <Button onClick={() => setActive(btn.id)} key={btn.id} component={NavLink} to={btn.to} className={`Navigation__text--buttons ${active == btn.id ? 'active' : ''}`} variant='text'> {btn.label} </Button>
                ))}
            </div>
            <div className='Navigation__buttons--other'>
                <Button className='Navigation__icons--buttons'>
                    <Icons.ThemeIcon />
                </Button>
                {otherButtons.map((btn) => (
                    <Button onClick={() => setActive(btn.id)} key={btn.id} component={NavLink} to={btn.to} className={`Navigation__icons--buttons ${active == btn.id ? 'active' : ''}`}> {btn.label} </Button>
                ))}
            </div>
        </div>
    </nav>
  );
};