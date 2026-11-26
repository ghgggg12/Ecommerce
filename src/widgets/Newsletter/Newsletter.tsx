import { Button } from '@mui/material';
import { Flex } from '@shared/ui/flex/Flex';
import { Icons } from '@shared/assets/svg/index';

import './Newsletter.css';

export const Newsletter = () => {
  return (
    <section className='Newsletter'>
      <Flex className='Newsletter__main' rowGap='8px' flexDirection='column' alignItems='center'>
        <h1 className='Newsletter__header'>Subscribe to our Newsletter</h1>
        <p className='Newsletter__about'>Get updates on new products and offers.</p>
      </Flex>
      <Flex className='Newsletter__buttons' justifyContent='center'>
        <form className='Newsletter__form'>
          <div className='Newsletter__container Newsletter__container--input'>
            <Icons.MailIcon />
            <input className='Newsletter__input' required placeholder="Enter your email" type="email" />
          </div>
          <Button className='Newsletter__button' type="submit" variant='contained'>Subscribe</Button>
        </form>
      </Flex>
    </section>
  );
};