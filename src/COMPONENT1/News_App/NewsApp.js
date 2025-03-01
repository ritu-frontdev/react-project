import React, { useEffect, useState } from "react";
import Card from "./Card";
import ReactLoading from "react-loading";
const NewsApp=()=>{
    const[search, setsearch] = useState('india');
    const[newsdata, setnewsdata] = useState([])
    const[isloading, setloading] = useState(false)

function handleinput(e){
    console.log(e.target.value)
    setsearch(e.target.value)
    
    
}
function handlebtn(event){
    setsearch(event.target.value)
    fetch_api()

}
    const ApI_key = "a17efdab33434938a777a50f38c826c9"
    // const api_url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=a17efdab33434938a777a50f38c826c9`
    const api_url = `https://newsapi.org/v2/everything?q=in+${search}&sortBy=publishedAt&apiKey=a17efdab33434938a777a50f38c826c9`
    async function fetch_api() {
        setloading(true);
        const res = await fetch(api_url)
        const data = await res.json();
        setloading (false);
            setnewsdata(data.articles)
        }
        useEffect(()=>{
            fetch_api()
        },[])
    return(
        <>
        <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
        <div className="navbar-brand">Trendy News</div>
        <div className="navbar-brand">All News Top Headlines</div>
        <div class="d-flex align-items-center">
        <input className="form-control me-2" type="search" placeholder="Search News" aria-label="Search" onChange={handleinput} value={search}/>
        <button className="btn btn-dark my-2 my-sm-0"  onClick={fetch_api}>Search</button> 
    </div>
            </div>    
</nav>
<h3 className="subheadingnews">Stay Update with TrendyNews!</h3>
<div className="container">
<button type="button" className="btn btn-success margin-left" onClick={handlebtn} value="business">Business</button>
<button type="button" className="btn btn-success margin-left" onClick={handlebtn} value="entertainment">Entertainment</button>
<button type="button" className="btn btn-success margin-left" onClick={handlebtn} value="general">General</button>
<button type="button" className="btn btn-success margin-left" onClick={handlebtn} value="health">Health</button>
<button type="button" className="btn btn-success margin-left" onClick={handlebtn} value="science">Science</button>
<button type="button" className="btn btn-success margin-left" onClick={handlebtn} value="sports">Sports</button>
<button type="button" className="btn btn-success margin-left" onClick={handlebtn} value="technology">Technology</button>
</div>

{isloading && (<div className="loadingnews">
  <ReactLoading type="spokes" color="#0000FF" height={100} width={100} /> 
</div>)}


{newsdata ? <Card data ={newsdata}/>:<p>No data available</p>}

</>

)


}
export default NewsApp;