import React from 'react'

export default function Data({message
    ,email,favcar,gender, phonenumber
    ,firstname,lastname,javascript,Nodejs,visibility,Express,}) 
    {

        
    return (
        <div className="infos">
            <h1>Entered information</h1>
            <br/>
            <h2> Name: {firstname} {lastname}</h2>
            <br/>
            <h2> Email: {email}</h2>
            <br/>
            <h2> Phone Number: {phonenumber}</h2>
            <br/>
            <h2> Gender: {gender}</h2>
            <br/>
            <h2> Skills level: {favcar}</h2>
            <br/>
            <h2>Message: {message}</h2>
            <br/>
            <h2 className="h2">Skills-Set:</h2>
            <br/>
            <span>Javascript  {javascript? "Yes":"No"} </span>
            <span>Express  {Express? "Yes":"No"} </span>
            <span> Node  {Nodejs? "Yes":"No"}</span>
            <br/>

            <h2> Terms Agreed?  {visibility? "Yes":"No"}</h2>
            
        </div>
    )
}
