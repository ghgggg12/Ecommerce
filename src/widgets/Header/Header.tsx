import './Header.css';
import { useRef, useEffect } from 'react';
import UIkit from 'uikit';
import { Icons } from '@shared/assets/svg';
import logo from '@shared/assets/svg/logos/logo.svg';

export const Header = () => {
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(stickyRef.current){
        const sticky = UIkit.sticky(stickyRef.current);
      return () => sticky.$destroy();
    }
  }, []);

  return (
    <header className='Header'>
        <div className='header__line--top'>
            <div className='header__line--left'>
                <div className='geolocation'>
                    <span className='geolocation__icon'>
                        <Icons.GeolocationIcon />
                    </span>
                    <span className='geolocation__text'>Стрежевой</span>
                </div>
                <nav className='navigator--left'>
                    <div className='navigator__site navigator__container--left'>
                        <span className='navigator__icon'>
                            <Icons.SiteIcon />
                        </span>

                        <a href='https://hawk.ru/' rel="noopener noreferrer" target='_blank' className='navigator__text'>hawk.ru</a>
                    </div>

                    <div className='navigator__hawk navigator__container--left'>
                        <span className='navigator__icon'>
                            <Icons.HawkIcon />
                        </span>

                        <a href='https://mhl.hawk.ru/' rel="noopener noreferrer" target='_blank' className='navigator__text'>Ястребы</a>
                    </div>

                    <div className='navigator__arena navigator__container--left'>
                        <span className='navigator__icon--arena'>
                            <Icons.ArenaIcon />
                        </span>

                        <a href='https://gdrive-arena.ru/' rel="noopener noreferrer" target='_blank' className='navigator__text'>G-Drive Арена</a>
                    </div>

                    <div className='navigator__academy navigator__container--left'>
                        <span className='navigator__icon'>
                            <Icons.AcademyIcon />
                        </span>

                        <a href='https://academy.hawk.ru/' rel="noopener noreferrer" target='_blank' className='navigator__text'>Академия</a>
                    </div>

                    <div className='navigator__ticket navigator__container--left'>
                        <span className='navigator__icon'>
                            <Icons.TicketIcon />
                        </span>

                        <a href='https://tickets.hawk.ru/' rel="noopener noreferrer" target='_blank' className='navigator__text'>Билеты</a>
                    </div>
                </nav>
            </div>
            <div className='header__line--right'>
                <nav className='navigator--right'>
                    <div className='navigator__blog navigator__container--right'>
                        <span className='navigator__icon'>
                            <Icons.BlogIcon />
                        </span>

                        <a href='https://shop.hawk.ru/blog/' rel="noopener noreferrer" target='_blank' className='navigator__text'>Блог</a>
                    </div>
                    <div className='navigator__delivery navigator__container--right'>
                        <span className='navigator__icon'>
                            <Icons.DeliveryIcon />
                        </span>

                        <a href='https://shop.hawk.ru/delivery/' rel="noopener noreferrer" target='_blank' className='navigator__text'>Доставка</a>
                    </div>
                    <div className='navigator__contacts navigator__container--right'>
                        <span className='navigator__icon'>
                            <Icons.ContactsIcon />
                        </span>

                        <a href='https://shop.hawk.ru/contacts/' rel="noopener noreferrer" target='_blank' className='navigator__text'>Контакты</a>
                    </div>
                </nav>
            </div>
        </div>
        <div ref={stickyRef} className='header__line--bottom'>
            <div className='header__logo'>
                <a href='' className='uk-button uk-button-link'>
                    <img src={logo} />
                </a>
            </div>
            <button className='header__button header__button--catalog uk-button uk-button-default'>
                <Icons.BurgerIcon />
                <span className='button__text button__text--catalog'>Каталог</span>
            </button>
            <form className="header__search uk-search uk-search-default">
                <input className="search__input uk-search-input uk-search-default" type="search" placeholder="Поиск"/>
                <button className="search__button uk-search-icon-flip" ><Icons.SearchIcon/></button>
            </form>
            <div className='header__buttons--containers'>
                <div className='buttons__containers buttons__containers--main'>
                    <div className='buttons__column buttons__column--certificate'>
                        <span className='column__icons column__icons--certificate'>
                            <Icons.CertificateIcon />
                        </span>
                        <span className='column__texts column__texts--certificate'>
                            Сертификат
                        </span>
                    </div>
                    <div className='buttons__column buttons__column--favorite'>
                        <span className='column__icons column__icons--favorite'>
                            <Icons.LikeIcon />
                        </span>
                        <span className='column__texts column__texts--favorite'>
                            Избранное
                        </span>
                    </div>
                    <div className='buttons__column buttons__column--basket'>
                        <span className='column__icons column__icons--basket'>
                            <Icons.BasketIcon />
                        </span>
                        <span className='column__texts column__texts--basket'>
                            Корзина
                        </span>
                    </div>
                </div>

                <div className='buttons__containers buttons__containers--login'>
                    <div className='buttons__column buttons__column--login'>
                        <span className='column__icons column__icons--login'>
                            <Icons.LoginIcon />
                        </span>
                        <span className='column__texts column__texts--login'>
                            Войти
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};