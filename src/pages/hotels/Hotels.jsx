import './hotels.css'
import { NavBar } from '../../components/navbar/NavBar'
import { Header } from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


export const Hotels = () => {
  const photos = [
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" 
    },
    {
      src:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" 
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" 
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
    }
  ]
  return (
    <div>
      <NavBar />
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon Icon={faLocationDot} />
            <span>123 Elton Street New York City</span>
          </div>
          <span className="hotelDistance">
            Excellent Location 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map(photo => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelsDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, 
                Tower Street Apartments has accommodations with air Conditioning and free Wifi.
                The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV, 
                and a  private bathroom with shower and hairdryer. A fridge is also 
                offered, as well as electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, 
                main Market Square and Town Hall Tower. 
                The nearest airport is John Paul || International Krakow-Balice, 16.1km from Tower Street Apartments, 
                and property offers a paid airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-Night stay!</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
              <h2><b>$954</b>(9 nights)</h2>
              <button>Reserve or Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
