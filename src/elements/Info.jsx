import React from "react";
import Personinfo from "../UiComponents/Personinfo.jsx";

const Info = () =>{
    return (
        <div className="flex justify-center items-center w-[100%] h-[100%]">
            <table className="w-[100%] h-[100%] text-center flex justify-center items-center">
               <tbody>
               <tr>
                   <td className="pl-5 pr-5">            <Personinfo PersonalInfo={["Age: 18", "Hobbys: Codding, Reading", ""]} Name={"Nick Hillmann"} Picture={"/src/assets/NickProf.jpeg"}></Personinfo>
                   </td>
                   <td className="pl-5 pr-5">            <Personinfo PersonalInfo={""} Name={"Jarno Calise"} Picture={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2017-05-14_NRW_Landtagswahl_by_Olaf_Kosinsky-116.jpg/220px-2017-05-14_NRW_Landtagswahl_by_Olaf_Kosinsky-116.jpg"}></Personinfo>
                   </td>
               </tr>
               <tr>
                   <td className="pl-5 pr-5">            <Personinfo PersonalInfo={""} Name={"Marc Müller"} Picture={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2017-05-14_NRW_Landtagswahl_by_Olaf_Kosinsky-116.jpg/220px-2017-05-14_NRW_Landtagswahl_by_Olaf_Kosinsky-116.jpg"}></Personinfo>
                   </td>
                   <td className="pl-5 pr-5">            <Personinfo PersonalInfo={""} Name={"Fabian Holler"} Picture={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2017-05-14_NRW_Landtagswahl_by_Olaf_Kosinsky-116.jpg/220px-2017-05-14_NRW_Landtagswahl_by_Olaf_Kosinsky-116.jpg"}></Personinfo>
                   </td>
               </tr>
               </tbody>
            </table>
        </div>
    )
}

export default Info;