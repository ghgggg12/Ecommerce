import './Top.css';

export const Top = () => {
  return (
    <div className='Top'>
        <div className='top__line'>
            <div className='line__container uk-margin-medium-left uk-margin-medium-right'>
                <div className='container__text'>
                    <p className='text text--main'>Sign up and get 20% off to your first order.</p>
                    &nbsp;
                    <a href='#' className='text text--extra'>Sign Up Now</a>
                </div>

                <div className='container__button'>
                    <button className='button__icon uk-close-large' data-uk-close aria-label="Close" />
                </div>
            </div>
        </div>
    </div>
  );
};