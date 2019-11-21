import React, { Component } from "react";
import { api } from "../../services/ApiConfig";
import PodContainer from "../shared/PodContainer";
import PodInfo from "../PodInfo";
import "../../styles/Pods.css";

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
    const renderPods = this.state.pods.map((pod, i) => {
      return (
        <div key={i}>
          <PodContainer handlePodInfo={this.handlePodInfo} key={i} obj={pod} />
        </div>
      );
    });
    return (
        <div className="podscontainer">
          <p className="select">
            Select A Pod To View It's Caffeine Levels. <br></br>
            <br></br>
            <br></br>If You Have A Pod To Add, Please Select 'Add Pod' From The
            Menu Above
          </p>
          <div className="allpods">{renderPods}</div>
        </div>
    );
  }
}

export default Pods;
