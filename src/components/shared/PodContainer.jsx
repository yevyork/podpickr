import React from "react";
import PodInfo from "../PodInfo";
import "./styles/PodContainer.css";

class PodContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  handlePodInfo = pod => {
    this.setState({
      modal: true
    });
  };

  closeModal = () => {
    this.setState({
      modal: false
    });
  };

  render() {
    const modal = this.state.modal ? (
      <PodInfo
        className="podmodal"
        closeModal={this.closeModal}
        data={this.props.obj}
      />
    ) : null;

    return (
      
        <div className="PodPageBody">
          <div className="podcontainer" onClick={() => this.handlePodInfo()}>
            <img className="podimg" src={this.props.obj.imgurl} alt="pod" />
          </div>
          {modal}
        </div>
      
    );
  }
}
export default PodContainer;


