import { Slider } from '@widgets/Slider/index';
import { Arrivals } from '@widgets/Arrivals/index';
import { Shoe } from '@widgets/Shoe/index';
import { Whychoose } from '@widgets/Whychoose/index';
import { Newsletter } from '@widgets/Newsletter/index';

export const Main = () => {
  return (
    <div className='Main'>
      <Slider />
      <Arrivals />
      <Shoe />
      <Whychoose />
      <Newsletter />
    </div>
  );
};