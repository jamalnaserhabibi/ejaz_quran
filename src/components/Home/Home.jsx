import "./Home.css";
import bg from "../../assets/background5.jpg";
// import besm from "../../assets/besmgreen.png";
import line from "../../assets/linegreen.png";
export default function Home() {
  return (
    <>
      <div className="mainContainer">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0, 0, 0,0.6), rgba(0, 0, 0,0.4)), url(${bg})`,
          }}
          className="main"
        >
          <div className="homeText">
            <div className="mainText">
              <h1 className="hometitle">اعجاز قرآنکریم</h1>
            </div>
            <div className="mainText0">
              <img src={line} alt="" />
             
            </div>
            <div className="DesText">
            <h2 className="ayat">
              وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِكُلِّ شَيْءٍ وَهُدًى وَرَحْمَةً وَبُشْرَىٰ لِلْمُسْلِمِينَ
              </h2>
              <p>
                متن بیشتر به سایز کوچکتر از متن بالا متن بیشتر به سایز کوچکتر از
                متن بالا متن بیشتر به سایز کوچکتر از متن بالا متن بیشتر به سایز
                کوچکتر از متن بالا متن بیشتر به سایز کوچکتر از متن بالا متن
                بیشتر به سایز کوچکتر از متن بالا
              </p>
            </div>
            <button className="home_btn">درس روز</button>
        <div className="homeBoxes">
          <div className="boxes 1">
            <h1>آیکن</h1>
            <h2>متن لنک</h2>
          </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
}
