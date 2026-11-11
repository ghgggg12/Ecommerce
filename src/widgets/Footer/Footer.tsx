import './Footer.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router';
import { Icons } from '@shared/assets/svg/index';

export const Footer = () => {
  return (
    <section className='Footer'>
        <div className='Footer__line1' />
        <div className='Footer__inner'>
            <div className='Footer__sections'>
                <section className='Footer__info Footer__section'>
                    <div className='Footer__icon'>
                        <span className='Footer__logo'>
                            S
                        </span>
                        <div className='Footer__texts--information'>
                            <div className='Footer__header'>
                                ShopSphere
                            </div>
                            <div className='Footer__about'>
                                Premium e-commerce
                            </div>
                        </div>
                    </div>
                    <p className='Footer__information'>
                        Trendy products, fast delivery, and secure checkout—built with React + MUI.
                    </p>
                    <div className='Footer__buttons'>
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
                    </div>
                </section>
                <section className='Footer__shop Footer__section'>
                    <p className='Footer__headers'>Shop</p>
                    <div className='Footer__texts--links'>
                        <Link to='/' className='Footer__text--link'>All Products</Link>
                        <Link to='/' className='Footer__text--link'>Popular</Link>
                        <Link to='/' className='Footer__text--link'>New Arrivals</Link>
                        <Link to='/' className='Footer__text--link'>Deals</Link>
                    </div>
                </section>
                <section className='Footer__help Footer__section'>
                    <p className='Footer__headers'>Help</p>
                    <div className='Footer__texts--links'>
                        <Link to='/checkout' className='Footer__text--link'>Checkout</Link>
                        <Link to='/basket' className='Footer__text--link'>Basket</Link>
                        <Link to='/shipping' className='Footer__text--link'>Shipping & Delivery</Link>
                        <Link to='/returns' className='Footer__text--link'>Returns & Refunds</Link>
                    </div>
                </section>
                <section className='Footer__newsletter Footer__section'>
                    <div className='Footer__header--newsletter Footer__headers'>
                        Newsletter
                    </div>
                    <div className='Footer__about--newsletter'>
                        Get updates on new products and offers.
                    </div>
                    <div className='Footer__buttons--newsletter'>
                        <input className='Footer__input' type='email' placeholder='Email address' />
                        <Button className='Footer__button' variant="contained">Subscribe</Button>
                    </div>
                    <div className='Footer__extra--newsletter'>
                        No spam. Unsubscribe anytime.
                    </div>
                </section>
            </div>
            <div className='Footer__line2' />
            <div className='Footer__row'>
                <div className='Footer__text--copyright'>
                    © 2026 ShopSphere. All rights reserved.
                </div>
                <div className='Footer__buttons--privacy'>
                    <a className='Footer__button' href='/'>Privacy</a>
                    <a className='Footer__button' href='/'>Terms</a>
                    <a className='Footer__button' href='/contact'>Contact</a>
                </div>
            </div>
        </div>
    </section>
  );
};