import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const FirstPage=()=>{
    const navigate = useNavigate();
    return(
        <>
        <div className="boxsizenews">
                               
            </div>
            <div className="mt-4"></div>
            <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={()=>navigate("/NewsApp")}>Latest News</button>
</div>

            </>
            
    )
    
}
export default FirstPage;