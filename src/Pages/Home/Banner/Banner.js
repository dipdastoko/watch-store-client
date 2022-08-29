import React from 'react';
import Carousel from 'react-material-ui-carousel';
import banner1 from '../../../Images/Banner/banner1.jpg';
import banner2 from '../../../Images/Banner/banner2.jpg';
import banner3 from '../../../Images/Banner/banner3.jpg';

const Banner = () => {
    const images = [banner1, banner2, banner3];
    return (

        <Carousel>
            {
                images.map(image => <img style={{
                    width: '100%',
                    maxHeight: '500px'

                }} src={image} alt='' />)
            }
        </Carousel>
    );
};

export default Banner;