import React from "react";
import '../styles/PodInfo.css'

const PodInfo = (props) => {
    // const{ onClick } = props
    // const { name, type, intensity, caffeine } = props.podData
    return(
  <div className="podmodal">
      <button className='close' onClick={props.closeModal}>X</button>
    <ul>
      <li>{props.data.name}</li>
      <li>{props.data.type}</li>
      <li>{`Intensity: ${props.data.intensity}`}</li>
      <li>{`Caffeine: ${props.data.caffeine}`}</li> 
    </ul>
  </div>
    )};

export default PodInfo

