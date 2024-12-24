import './tafsirQuranBelQuran.css';
import bg from "../../assets/background5.jpg";
import flowercontent from "../../assets/contentcardflower.png";
import { useTranslation } from "react-i18next";
export default function TafsirQuranBelQuran() {
  const { t } = useTranslation();
  return (
    <div className='tafsirQuranBelQuran'>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0, 0, 0,0.6), rgba(0, 0, 0,0.4)), url(${bg})`,
          }}
          className="main"
        >
           <h1>{t("tafsirquran")}</h1>
       
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
