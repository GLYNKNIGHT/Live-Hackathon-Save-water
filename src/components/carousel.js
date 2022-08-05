import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function MyCarousel({onClick}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };




return <div>
<Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div className="card" onClick={onClick}><img className="card-image" src='/bbc-logo-1.png' alt='BBC'/></div>
  <div className="card" onClick={onClick}><img className="card-image" src='/unicef.png' alt='Unicef'/></div>
  <div className="card" onClick={onClick}><img className="card-image" src='/wwf.png' alt='WWF'/></div>
  <div className="card" onClick={onClick}><img className="card-image" src='/united-utilities-logo.png' alt='United Utilities'/></div>
</Carousel>
</div>
}