import Slider from 'react-slick';
import './Carousel.css';

function Carousel({ children }) {

    const settings = {
        dots: true,
        infinite: true, // true
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptuveHeight: true,
        // slidesToShow: 3,
        slidesToScroll: 1,
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