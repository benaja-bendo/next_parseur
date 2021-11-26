import React from "react";

export default function MainResultat({resume}){
    return(<>
    <strong>Email</strong>  
    {resume[0].data.emails}<br/>

    <strong>profession</strong>  
    {resume[0].data.profession}<br/>

    <strong>Numéro de téléphone</strong>  
    {resume[0].data.phoneNumbers.map(e=><p key={e}>{e}</p>)}<br/>
    </>);
}