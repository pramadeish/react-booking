import "./searchItem.css"
import { Link } from "react-router-dom"
const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
        <img src={item.photos[0]} alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.distance}km from central</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Luxury Hotel of TATA Groups</span>
            <span className="siFeatures">{item.desc}</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later,So lock this great price!</span>
        </div>
        <div className="siDetails">
            {item.rating &&<div className="siRating">
                <span>Excellent</span>
                <button>{item.rating}</button>
            </div>}
            <div className="siDetailTexts">
                <span className="siPrice">Rs:{item.cheapestPrice}</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <Link to={`/hotels/${item._id}`}>
                <button className="siCheckButton">See availability</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem