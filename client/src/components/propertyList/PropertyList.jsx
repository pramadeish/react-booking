import "./propertyList.css"
import useFetch from "../../hooks/useFetch"
const PropertyList = () => {
    const {data,loading,error}=useFetch("/hotels/countByType");
    const images=[
        "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
        "https://aland.com.au/wp-content/uploads/2021/08/190Croatia_View1_B_McFarlaneRd_R6_Twilight_R2-930x620.jpg",
        "https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/03/04111335/amandari-indonesia-suite-exterior-and-pool_original_11588-2-1401x900.jpg",
        "https://assets-news.housing.com/news/wp-content/uploads/2022/02/27121904/featured-compressed-67.jpg",
    ];
  return (
    <div className="pList">
{    loading?("please wait loading!") : (<>  
        {data && images.map((img,i)=>(<div className="pListItem" key={i}>
            <img src={img} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h2>{data[i]?.count} {data[i]?.type}</h2>
            </div>
        </div>))}
        </>)}
    </div>
  )
}

export default PropertyList