import useFetch from "../../hooks/useFetch"
import "./featured.css"

const Featured = () => {
    const {data,loading,error}=useFetch("/hotels/count/countByCity?cities=chennai,madurai,coimbatore")
  return (
    <div className="featured">
    {loading ? ("loading please wait!"):<><div className="featuredItem">
            <img src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandchola-chennai/images/overview/overview-desktop/exterior-dusk.png"
            alt=""
            className="featuredImg"/>
            <div className="featuredTitle">
                <h1>Chennai</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
            

        <div className="featuredItem">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/25/3b/b4/d6/exterior.jpg"
            alt=""
            className="featuredImg"/>
            <div className="featuredTitle">
                <h1>Madurai</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/4b/0b/58/finest-contemporary-business.jpg"
            alt=""
            className="featuredImg"/>
            <div className="featuredTitle">
                <h1>Coimbatore</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div></>} 
    </div>
  )
}

export default Featured