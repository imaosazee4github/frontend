import useFetch from "../../hooks/useFetch";
import "./Featured.css";

export const Featured = () => {

 const {data,loading,error} = useFetch("/hotel/countByCity?cities=berlin,madrid,london")

  return (
    <div className="featured">
       {loading ? ("Loading Please wait" ):(<><div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>Berlin</h1>
            <h1>{data[0]}Properties</h1>
          </div>
        </div>
        <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>Madrid</h1>
            <h1>{data[1]}Properties</h1>
          </div>
        </div>
        <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>London</h1>
            <h1>{data[2]}Properties</h1>
          </div>
        </div></>)}
    </div>
  )
}
