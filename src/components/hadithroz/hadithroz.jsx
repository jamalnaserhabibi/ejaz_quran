import "./hadithroz.css";
import flower from "../../assets/flower.png";
export default function hadithroz() {
  return (
    <div className="hadithroz">
      <div className="contents">
        <img className="cornerflower" src={flower} alt="" />
        <div className="elements">
          <div className="pic"></div>
          <div className="texts">
            <h1>عنوان</h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
