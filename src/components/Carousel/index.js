import Slider from 'react-slick';
import './Carousel.css';

function Carousel({ children }) {

    const settings = {
        dots: false,
        infinite: false, // true
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptuveHeight: true,
        // slidesToShow: 5,
        slidesToScroll: 2,
      };

    return (
        <div>
            <Slider {...settings}>
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;