import React from "react";

const Personinfo = ({Name, Info, Picture }) => {
    return  (
    <div className="">
    <div className="card card-side bg-base-100 shadow-xl">

        <figure><img src={Picture} className="w-[150px] h-auto" /></figure>
        <div className="card-body">
            <h2 className="card-title">{Name}</h2>
            <p>{Info}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
            </div>
        </div>
    </div>
    </div>)

}

export default Personinfo;