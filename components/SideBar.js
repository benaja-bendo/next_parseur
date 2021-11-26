import React from "react";
import CardDetailSideBar from "./CardDetailSideBar";

export default function SideBar({resume}){
    return(<>
    <CardDetailSideBar title ={resume[0].data.name.raw}/>
    </>);
}