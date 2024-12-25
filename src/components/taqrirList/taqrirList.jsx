import './taqrirList.css';
import flowercontent from "../../assets/contentcardflower.png";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();
export default function taqrirList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const identifier = queryParams.get("identifier") || "Default Title";
  const contentData = [
    { id: 1, title: "عنوان بحث مورد نظر 1" },
    { id: 2, title: "عنوان بحث مورد نظر 2" },
    { id: 3, title: "عنوان بحث مورد نظر 3" },
    { id: 4, title: "عنوان بحث مورد نظر 4" },
    { id: 5, title: "عنوان بحث مورد نظر 5" },
    { id: 6, title: "عنوان بحث مورد نظر 6" },
    { id: 7, title: "عنوان بحث مورد نظر 7" },
    { id: 8, title: "عنوان بحث مورد نظر 8" },
    { id: 9, title: "عنوان بحث مورد نظر 9" },
    { id: 10, title: "عنوان بحث مورد نظر 10" },
    { id: 11, title: "عنوان بحث مورد نظر 11" },
    { id: 12, title: "عنوان بحث مورد نظر 12" },
    { id: 13, title: "عنوان بحث مورد نظر 13" },
    { id: 14, title: "عنوان بحث مورد نظر 14" },
    { id: 15, title: "عنوان بحث مورد نظر 15" },
    { id: 16, title: "عنوان بحث مورد نظر 16" },
    { id: 17, title: "عنوان بحث مورد نظر 17" },
    { id: 18, title: "عنوان بحث مورد نظر 18" },
    { id: 19, title: "عنوان بحث مورد نظر 19" },
    { id: 20, title: "عنوان بحث مورد نظر 20" },
  ];
  return (
    <div className='taqrirList'>
      <div className="main"></div>
      <h3>{identifier}</h3>

      {contentData.map((item) => (
        <Link
          to={`/taqrirView?index=${item.id}&from=${identifier}`}
          key={item.id}
          className="content-list"
        >
          <div className="content"  data-aos="fade-up"> 
            <img src={flowercontent} alt="" />
            <div className="text">
              <h2>{item.title}</h2>
            </div>
            <img
              style={{ transform: "rotate(180deg)" }}
              src={flowercontent}
              alt=""
            />
          </div>
        </Link>
      ))}
     

    </div>
  );
}
