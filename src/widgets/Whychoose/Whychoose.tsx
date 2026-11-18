import { Button } from '@mui/material';
import { NavLink } from 'react-router';
import { useNav } from '@App/context/NavContext';
import { Flex } from '@shared/ui/flex/Flex';
import { Icons } from '@shared/assets/svg/index';

import './Whychoose.css';

export const Whychoose = () => {
  const { setActive } = useNav();

  return (
    <section className='Whychoose'>
      <Flex className='Whychoose__main' alignItems='center' flexDirection='column'>
        <h1 className='Whychoose__header'>Why Choose Us</h1>
        <p className='Whychoose__about'>
          We focus on simple, honest service that makes your shopping easy.
        </p>
      </Flex>
      <Flex className='Whychoose__cards' flexDirection='row' justifyContent='center'>
        <div className='Whychoose__card1 Whychoose__card'>
          <div className='Whychoose__icon1 Whychoose__icon'>
            <Icons.CarIcon />
          </div>
          <Flex flexDirection='column' className='Whychoose__texts--card'>
            <h2 className='Whychoose__header--card'>Easy Exchange Policy</h2>
            <p className='Whychoose__about--card'>Hassle-free exchange within 30 days.</p>
          </Flex>
          <Flex className='Whychoose__buttons--card' justifyContent='flex-start' alignItems='flex-end'>
            <Button className="Whychoose__button--card" onClick={() => setActive('collection')} component={NavLink} to='/collection'>
              Learn more <Icons.ArrowIcon />
            </Button>
          </Flex>
        </div>
        <div className='Whychoose__card2 Whychoose__card'>
          <div className='Whychoose__icon2 Whychoose__icon'>
            <Icons.RotateIcon />
          </div>
          <Flex flexDirection='column' className='Whychoose__texts--card'>
            <h2 className='Whychoose__header--card'>7 Days Return Policy</h2>
            <p className='Whychoose__about--card'>Easy returns within 7 days.</p>
          </Flex>
          <Flex className='Whychoose__buttons--card' justifyContent='flex-start' alignItems='flex-end'>
            <Button className="Whychoose__button--card" onClick={() => setActive('collection')} component={NavLink} to='/collection'>
              Learn more <Icons.ArrowIcon />
            </Button>
          </Flex>
        </div>
        <div className='Whychoose__card3 Whychoose__card'>
          <div className='Whychoose__icon3 Whychoose__icon'>
            <Icons.HeadphonesIcon />
          </div>
          <Flex flexDirection='column' className='Whychoose__texts--card'>
            <h2 className='Whychoose__header--card'>24/7 Customer Support</h2>
            <p className='Whychoose__about--card'>We are always here to help you.</p>
          </Flex>
          <Flex className='Whychoose__buttons--card' justifyContent='flex-start' alignItems='flex-end'>
            <Button className="Whychoose__button--card" onClick={() => setActive('collection')} component={NavLink} to='/collection'>
              Learn more <Icons.ArrowIcon />
            </Button>
          </Flex>
        </div>
      </Flex>
    </section>
  );
};