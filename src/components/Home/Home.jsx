import "./Home.css";
import bg from "../../assets/background.jpg";
import besm from "../../assets/besmgreen.png";
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
              <img className="besm" src={besm} alt="" />
            </div>
            <div className="mainText0">
              <h2>
                متن مبارک ایه از قرآنشریف
              </h2>
              <img src={line} alt="" />
            </div>

            <div className="DesText">
              <p>
                متن بیشتر به سایز کوچکتر از متن بالا متن بیشتر به سایز کوچکتر از
                متن بالا متن بیشتر به سایز کوچکتر از متن بالا متن بیشتر به سایز
                کوچکتر از متن بالا متن بیشتر به سایز کوچکتر از متن بالا متن
                بیشتر به سایز کوچکتر از متن بالا
              </p>
            </div>
            <button className="home_btn">درس روز</button>
          </div>
        </div>
        <div className="homeBoxes">
          <div className="boxes 1">
            <h1>آیکن</h1>
            <h2>متن لنک</h2>
          </div>
          <div className="boxes 2">
          <h1>آیکن</h1>
          <h2>متن لنک</h2>
          </div>
          <div className="boxes 3">
          <h1>آیکن</h1>
          <h2>متن لنک</h2>
          </div>
        </div>
      </div>
    </>
  );
}
