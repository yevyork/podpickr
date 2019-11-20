import React, { Component } from "react";
import { api } from "../../services/ApiConfig";
import PodContainer from "../shared/PodContainer";
import PodInfo from '../PodInfo'
import "../../styles/Pods.css"

class Pods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pods: []
    };
  }

  componentDidMount() {
    this.fetchPods();
  }

  fetchPods = async () => {
    try {
      const pods = await api.get("/NespressoPodList");
      this.setState({ pods: pods.data });
    } catch (error) {
      console.log(error);
    }

  };
  


  render() {
    console.log(this.state.pods);
    const renderPods = this.state.pods.map((pod, i) => {
      return (<>
      <PodContainer handlePodInfo={this.handlePodInfo} key={i} obj={pod} />
      
      </>)
      
    });
    return <div className='podscontainer'>
        <div className='allpods'>{renderPods}</div>
        
        </div>
  }
}

export default Pods;
