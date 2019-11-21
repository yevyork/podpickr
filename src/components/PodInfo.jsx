import React from "react";
import '../styles/PodInfo.css'

const PodInfo = (props) => {
    // const{ onClick } = props
    // const { name, type, intensity, caffeine } = props.podData
    return(
  <div className="podmodal">
      <button className='close' onClick={props.closeModal}>X</button>
    <ul>
      <li className='podname'>{props.data.name}</li>
      <br></br>
      <li className='podtype'>{`Type: ${props.data.type}`}</li>
      <li className='podintensity'>{`Intensity: ${props.data.intensity}`}</li>
      <li className='podcaffeine'>{`Caffeine: Max of ${props.data.caffeine}`}</li> 
    </ul>
  </div>
    )};

export default PodInfo

