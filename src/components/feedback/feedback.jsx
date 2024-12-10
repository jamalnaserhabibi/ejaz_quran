import "./feedback.css";
import 'aos/dist/aos.css';
import flower from "../../assets/bgflowe.png"
import Aos from "aos";
Aos.init();

export default function Book() {
  return (
    <div className="mainFeedback">
     
      <h1 data-aos="fade-up">نظریات شما</h1>
      <div  className="flowerdiv"> <img data-aos="fade-right"  className="flowerimg" src={flower} alt="" /></div>
      <div  className="formContainer">
       
      </div>
    </div>
  );
}
