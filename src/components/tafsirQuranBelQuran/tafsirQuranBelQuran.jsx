import './tafsirQuranBelQuran.css';
import flowercontent from "../../assets/contentcardflower.png";
export default function TafsirQuranBelQuran() {
  return (
    <div className='tafsirQuranBelQuran'>
        <div className="main">
      </div>
      <div className="content">
        <img src={flowercontent} alt="" />
        <div className="text">
          <h2>عنوان بحث مورد نظر</h2>
        </div>
        <img style={{transform:"rotate(180deg)"}}  src={flowercontent} alt="" />
      </div>
      <div className="content">
        <img src={flowercontent} alt="" />
        <div className="text">
          <h2>  عنوان بحث مورد نظر بعدی</h2>
        </div>
        <img style={{transform:"rotate(180deg)"}}  src={flowercontent} alt="" />
      </div>
      <div className="content">
        <img src={flowercontent} alt="" />
        <div className="text">
          <h2>عنوان بحث مورد نظر</h2>
        </div>
        <img style={{transform:"rotate(180deg)"}}  src={flowercontent} alt="" />
      </div>

   
    </div>
  );
}
