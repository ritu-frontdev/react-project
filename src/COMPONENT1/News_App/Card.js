const Card=({data})=>{
  // console.log(data) 
  const dates = data.map(articles=>articles.publishedAt)
       const isoDates = dates.map(date=>new Date(date))
      const objdate = isoDates.map((dt)=>({
        date:dt.toLocaleDateString("en-GB"),
        time:dt.toLocaleTimeString("en-US",{
          hour:"2-digit",
          minute:"2-digit",
          hour12:true
        })

      }))
      // console.log(objdate)
    const mergedata = data.map((i,j)=>({...i, date:objdate[j]?.date || "Not Date Available",
                                              time:objdate[j]?.time || "Not Time Available" 
    }));
  
    
              //  console.log(mergedata)
  return(
  <div class="row row-cols-4 g-0.05">
  
    { mergedata.map((i,index)=>{
      // console.log(i)
       return(
          
<div class="col">  
  <div className="card" style={{width: "20rem"}}>
  <img src= {i.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
<h5 className="card-title">{i.title}</h5>
<p className="card-text">{i.description}</p>
<a href={i.url} className="btn btn-primary">Read me...</a>
</div>
<div class="card-footer text-muted"><span>{i.date} {i.time}</span>

</div>
  </div>
  </div>
        )})}
    </div>
  

    )
}
export default Card;