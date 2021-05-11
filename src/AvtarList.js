import React ,{Component} from 'react';
 const AvtarList=(props)=>{
    return(
        <div className="avtarStyle ma4 bg-light-purple dib pa4 grow shadow-4" id={props.id}>
            <img src={`//joeschmoe.io/api/v1/${props.name}`}
     alt="avtar Images" />
            <h1 className="tc">{props.name}</h1>
            <p>I am a {props.designation}</p>
        </div>
    )
 }
 export default AvtarList;