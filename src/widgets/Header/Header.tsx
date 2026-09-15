import { GeolocationIcon, SiteIcon, HawkIcon, ArenaIcon, AcademyIcon, TicketIcon, BlogIcon, DeliveryIcon, ContactsIcon } from '@shared/assets/svg/svg.tsx';
import './Header.css';

export const Header = () => {
  return (
    <header className='Header'>
        <div className='header__line'>
            <div className='header__line--left'>
                <div className='geolocation'>
                    <span className='geolocation__icon'>
                        <GeolocationIcon />
                    </span>
                    <span className='geolocation__city'>Стрежевой</span>
                </div>
                <nav className='navigator--left'>
                    <div className='navigator__site navigator__container--left'>
                        <span className='navigator__site--icon'>
                            <SiteIcon />
                        </span>

                        <a href='https://hawk.ru/' rel="noopener noreferrer" target='_blank' className='navigator__site--text navigator__texts'>hawk.ru</a>
                    </div>

                    <div className='navigator__hawk navigator__container--left'>
                        <span className='navigator__hawk--icon'>
                            <HawkIcon />
                        </span>

                        <a href='https://mhl.hawk.ru/' rel="noopener noreferrer" target='_blank' className='navigator__hawk--text navigator__texts'>Ястребы</a>
                    </div>

                    <div className='navigator__arena navigator__container--left'>
                        <span className='navigator__arena--icon'>
                            <ArenaIcon />
                        </span>

                        <a href='https://gdrive-arena.ru/' rel="noopener noreferrer" target='_blank' className='navigator__arena--text navigator__texts'>G-Drive Арена</a>
                    </div>

                    <div className='navigator__academy navigator__container--left'>
                        <span className='navigator__academy--icon'>
                            <AcademyIcon />
                        </span>

                        <a href='https://academy.hawk.ru/' rel="noopener noreferrer" target='_blank' className='navigator__academy--text navigator__texts'>Академия</a>
                    </div>

                    <div className='navigator__ticket navigator__container--left'>
                        <span className='navigator__ticket--icon'>
                            <TicketIcon />
                        </span>

                        <a href='https://tickets.hawk.ru/' rel="noopener noreferrer" target='_blank' className='navigator__ticket--text navigator__texts'>Билеты</a>
                    </div>
                </nav>
            </div>
            <nav className='header__line--right'>
                <div className='navigator--right'>
                    <div className='navigator__blog navigator__container--right'>
                        <span className='navigator__blog--icon'>
                            <BlogIcon />
                        </span>

                        <a href='https://shop.hawk.ru/blog/' rel="noopener noreferrer" target='_blank' className='navigator__blog--text navigator__texts'>Блог</a>
                    </div>
                    <div className='navigator__delivery navigator__container--right'>
                        <span className='navigator__delivery--icon'>
                            <DeliveryIcon />
                        </span>

                        <a href='https://shop.hawk.ru/delivery/' rel="noopener noreferrer" target='_blank' className='navigator__delivery--text navigator__texts'>Доставка</a>
                    </div>
                    <div className='navigator__contacts navigator__container--right'>
                        <span className='navigator__contacts--icon'>
                            <ContactsIcon />
                        </span>

                        <a href='https://shop.hawk.ru/contacts/' rel="noopener noreferrer" target='_blank' className='navigator__contacts--text navigator__texts'>Контакты</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  );
};