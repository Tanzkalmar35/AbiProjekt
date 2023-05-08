

import React from "react";






const Personinfo = ({Name, PersonalInfo, Picture }) => {

    let result = [...PersonalInfo];

    return  (
    <div className="">
        <div className="card card-side bg-base-100 shadow-xl">

            <figure><img alt="profile picture" src={Picture} className="w-[200px] h-[100%]" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">{Name}</h2>
                <div>{result.map(element => <p>{element}</p>)}</div>

            </div>
        </div>
    </div>)

}

export default Personinfo;