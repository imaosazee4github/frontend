import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBed, 
    faCab, 
    faCalendarDays, 
    faPerson, faPlane, 
    faTaxi } from '@fortawesome/free-solid-svg-icons'
    import { DateRange } from 'react-date-range';
import './header.css'
import { format } from 'date-fns';
import { useState } from 'react';

export const Header = ({type}) => {
    const[openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const[openOptions, setOpenOptions] = useState(false)
      const[options, setoptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
      })

      const handleOptions = (name, operation) => {
        setoptions((prev)=>{
            return {
                ...prev, 
                [name]:operation === "plus" ? options[name] + 1 : options[name] - 1,
            };
        });
      };
  return (
    <div className="header">
        <div className={type === "list"  ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
            <div className="headerlistItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerlistItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerlistItem">
            <FontAwesomeIcon icon={faCab} />
            <span>Car Rentals</span>
            </div>
            <div className="headerlistItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>
            <div className="headerlistItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>AirPort Taxis</span>
            </div>
            </div>
            { type !== 'list' &&
                <><h1 className="headerTitle">A life time of Discounts? it's Genius.</h1>
            <p className="headerDesc">Get rewarded for your Travels, unlock instants savings of 10% or more with a free Lamooking App.</p>
            <button className="headerBtn">SignIn / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                <input type='text' 
                placeholder='Where are you going?' 
                className='headerSearchInput'/>
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
               <span onClick={() => setOpenDate(!openDate)}className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} 
               to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
               {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
                />}
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                <span 
                onClick={() => setOpenOptions(!openOptions)}
                className='headerSearchText'>{`${options.adult} 
                adult . ${options.children} 
                children . ${options.room} 
                room`}
                </span>
               { openOptions && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                        <button
                        disabled={options.adult <= 1} 
                        className="optionCounterButton" 
                        onClick={()=> handleOptions("adult", "minus") }>-</button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button className="optionCounterButton"onClick={()=> handleOptions("adult", "plus") } >+</button>
                    </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                        <button 
                        disabled={options.children <= 0}
                        className="optionCounterButton" onClick={()=> handleOptions("children", "minus") }>-</button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className="optionCounterButton" onClick={()=> handleOptions("children", "plus") }>+</button>
                    </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                        <button 
                        disabled={options.room <= 1}
                        className="optionCounterButton" onClick={()=> handleOptions("room", "minus") }>-</button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button className="optionCounterButton" onClick={()=> handleOptions("room", "plus") }>+</button>
                    </div>
                    </div>
                </div>}
                </div>
                <div className="headerSearchItem">
               <button className='headerBtn'>Search</button>
                </div>
            </div>
            </>}
            </div>
            </div>
  )
}
