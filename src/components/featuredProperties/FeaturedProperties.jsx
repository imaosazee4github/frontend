import useFetch from '../../hooks/useFetch'
import './featuredProperties.css'


export const FeaturedProperties = () => {

  const { data, loading, error } = useFetch("/hotel?featured=true&limit=4");
 
  return (
    <div className="fp">
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="fpImg" />
        <span className="fpName">Aparthotels Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="fpImg" />
        <span className="fpName">Aparthotels Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="fpImg" />
        <span className="fpName">Aparthotels Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="fpImg" />
        <span className="fpName">Aparthotels Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
        </div>
        </div>
    </div>
  )
}
