import Button from '@mui/material/Button';
import { Link } from 'react-router';
import { Icons } from '@shared/assets/svg/index';
import { Flex } from '@shared/ui/flex/Flex'

import './Footer.css';

export const Footer = () => {
  return (
    <section className='Footer'>
        <div className='Footer__line1' />
        <div className='Footer__inner'>
            <Flex className='Footer__sections'>
                <section className='Footer__info Footer__section'>
                    <Flex className='Footer__icon'>
                        <span className='Footer__logo'>
                            S
                        </span>
                        <Flex flexDirection='column' className='Footer__texts--information'>
                            <h1 className='Footer__header'>
                                ShopSphere
                            </h1>
                            <p className='Footer__about'>
                                Premium e-commerce
                            </p>
                        </Flex>
                    </Flex>
                    <p className='Footer__information'>
                        Trendy products, fast delivery, and secure checkout—built with React + MUI.
                    </p>
                    <Flex className='Footer__buttons'>
                        <Button href='https://github.com/ghgggg12' target="_blank" className='Footer__button--github link__button'>
                            <Icons.GithubIcon/>
                        </Button>
                        <Button href='https://discordapp.com/users/858958180800266260' target="_blank" className='Footer__button--discord link__button'>
                            <Icons.DiscordIcon/>
                        </Button>
                        <Button href='https://x.com/Welllett' target="_blank" className='Footer__button--X link__button'>
                            <Icons.XIcon/>
                        </Button>
                        <Button href='https://www.youtube.com/@Wellett-0' target="_blank" className='Footer__button--X link__button'>
                            <Icons.YouTubeIcon/>
                        </Button>
                    </Flex>
                </section>
                <section className='Footer__shop Footer__section'>
                    <h1 className='Footer__headers'>Shop</h1>
                    <Flex flexDirection='column' className='Footer__texts--links'>
                        <Link to='/' className='Footer__text--link'>All Products</Link>
                        <Link to='/' className='Footer__text--link'>Popular</Link>
                        <Link to='/' className='Footer__text--link'>New Arrivals</Link>
                        <Link to='/' className='Footer__text--link'>Deals</Link>
                    </Flex>
                </section>
                <section className='Footer__help Footer__section'>
                    <h1 className='Footer__headers'>Help</h1>
                    <Flex flexDirection='column' className='Footer__texts--links'>
                        <Link to='/checkout' className='Footer__text--link'>Checkout</Link>
                        <Link to='/basket' className='Footer__text--link'>Basket</Link>
                        <Link to='/shipping' className='Footer__text--link'>Shipping & Delivery</Link>
                        <Link to='/returns' className='Footer__text--link'>Returns & Refunds</Link>
                    </Flex>
                </section>
                <section className='Footer__newsletter Footer__section'>
                    <h1 className='Footer__header--newsletter Footer__headers'>
                        Newsletter
                    </h1>
                    <p className='Footer__about--newsletter'>
                        Get updates on new products and offers.
                    </p>
                    <Flex className='Footer__buttons--newsletter'>
                        <input className='Footer__input' type='email' placeholder='Email address' />
                        <Button className='Footer__button' variant="contained">Subscribe</Button>
                    </Flex>
                    <p className='Footer__extra--newsletter'>
                        No spam. Unsubscribe anytime.
                    </p>
                </section>
            </Flex>
            <div className='Footer__line2' />
            <Flex className='Footer__row' justifyContent='flex-start'>
                <p className='Footer__text--copyright'>
                    © 2026 ShopSphere. All rights reserved.
                </p>
                <div className='Footer__buttons--privacy'>
                    <Link to='/' className='Footer__button'>Privacy</Link>
                    <Link to='/' className='Footer__button'>Terms</Link>
                    <Link to='/' className='Footer__button'>Contact</Link>
                </div>
            </Flex>
        </div>
    </section>
  );
};