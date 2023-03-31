import { faArrowCircleLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"
import { useLocation } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { SearchContext } from "../../context/SearchContext"

const Hotel = () => {
  const [slideNumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false);
  const location=useLocation();
  const id=location.pathname.split("/")[2];
  const {data,loading,error}=useFetch(`/hotels/find/${id}`);
  const {dates,options}=useContext(SearchContext)

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate,dates[0].startDate);

const handleOpen=(i)=>{
  setSlideNumber(i);
  setOpen(true);
}
const handleMove=(direction)=>{
  let newSlideNumber;
  if(direction==="l")
  {
    newSlideNumber=slideNumber===0?newSlideNumber=5: slideNumber-1;
  }
  else{
    newSlideNumber=slideNumber===5?newSlideNumber=0: slideNumber+1;
  }
  setSlideNumber(newSlideNumber)
}
  return (
    <div>
        <Navbar />
        <Header type="list"/>
        {loading?("loading!"):<div className="hotelContainer">
      {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>{setOpen(false)}}/>
        <FontAwesomeIcon icon={faArrowCircleLeft} className="arrow" onClick={()=>{handleMove("l")}}/>
        <div className="sliderWrapper">
          <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>{handleMove("r")}}/>
      </div>}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data.distance} from Central
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over Rs:{data.cheapestPrice} at this property and get free Dinner
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo,i)=>(
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(i)} src={photo} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">
                  {data.desc}
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>Located in the main area with a excellent 
                  location score of 9.8!
                </span>
                <h2>
                  <b>Rs:{days*data.cheapestPrice*options.room}</b>({days} nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>}
    </div>

  )
}

export default Hotel