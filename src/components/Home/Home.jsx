import './Home.css'
import bg from '../../assets/background.jpg'
export default function Home() {

  return (
    <>
    <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.722), rgba(33, 33, 33, 0.222)), url(${bg})` }} className="main">
    </div>
    </>
  )
}
