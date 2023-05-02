import './list.css'
import { NavBar } from '../../components/navbar/NavBar'
import { Header } from '../../components/header/Header'
import {useLocation} from "react-router-dom";
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';


export const List = () => {
 const location = useLocation()


  const [destination, setDestination] = useState(location.state.destination);
  const[openDate, setOpenDate] = useState(false)
 const [date, setDate] = useState(location.state.date )
 const [options, setOptions] = useState(location.state.options )
  return (
    <div>
      <NavBar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="lsItem">
            <label>Check-in Date</label>
            <span onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && (<DateRange 
            onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date}/>)}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="isOptions">
              <div className="isOptionItem">
                <span className="isOptionText">Min Price<small>Per night</small></span>
                <input type="number" className="isOptionInput" />
              </div>
              <div className="isOptionItem">
                <span className="isOptionText">Max Price<small>Per night</small></span>
                <input type="number" className="isOptionInput" />
              </div>
              <div className="isOptionItem">
                <span className="isOptionText">Adults</span>
                <input type="number" min={1} className="isOptionInput" placeholder={options.adult}/>
              </div>
              <div className="isOptionItem">
                <span className="isOptionText">Children</span>
                <input type="number" min={0} className="isOptionInput" placeholder={options.children}/>
              </div>
              <div className="isOptionItem">
                <span className="isOptionText">Room</span>
                <input type="number" min={1} className="isOptionInput" placeholder={options.room}/>
              </div>
            </div>
            <button>Search</button>
            </div>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}
