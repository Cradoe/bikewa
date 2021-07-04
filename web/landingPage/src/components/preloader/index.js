import React from "react";

const Preloader = ()=>{
    return (
        <div className="preloader">
        <div className="d-table">
            <div className="d-table-cell align-middle">
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Preloader;