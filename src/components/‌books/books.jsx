import Slider from "react-slick";
import "./books.css";
import 'aos/dist/aos.css';
import dalayel from "../../assets/dalayel.png"
import ziwar from "../../assets/ziwar.png"
import "../../assets/dalayel.png"
import Aos from "aos";
// import { ParallaxProvider, Parallax } from "react-scroll-parallax";
Aos.init();

export default function Book() {
  const books = [
    { id: 1, title: "اسم کتاب اول" ,bname: dalayel},
    { id: 2, title: "اسم کتاب دوم" ,bname: ziwar},
    { id: 3, title: "اسم کتاب سوم" ,bname: dalayel},
    { id: 4, title: "اسم کتاب چهارم" ,bname: ziwar},
    { id: 5, title: "اسم کتاب پنجم" ,bname: dalayel},
    { id: 6, title: "اسم کتاب ششم" ,bname: ziwar},
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mainBooks">
      <h1 data-aos="fade-up">کتاب ها</h1>
      <div data-aos="fade-up" className="bookContainer">
        <Slider {...settings}>
          {books.map((book) => (
            <div key={book.id} className="book">
              <img  className="bookCover" src={book.bname} alt="" />
              <h3>{book.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
