import { Slider } from '@widgets/Slider/index';
import { Arrivals } from '@widgets/Arrivals/index';
import { Shoe } from '@widgets/Shoe/index';

export const Main = () => {
  return (
    <div className='Main'>
      <Slider />
      <Arrivals />
      <Shoe />
    </div>
  );
};