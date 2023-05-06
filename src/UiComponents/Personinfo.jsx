

import React from "react";






const Personinfo = ({Name, PersonalInfo, Picture }) => {

    let result = [...PersonalInfo];

    return  (
    <div className="">
        <div className="card card-side bg-base-100 shadow-xl">

            <figure><img src={Picture} className="w-[150px] h-auto" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">{Name}</h2>
                <div>{result.map(element => <p>{element}</p>)}</div>

            </div>
        </div>
    </div>)

}

export default Personinfo;