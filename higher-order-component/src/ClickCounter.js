import React from "react";
import updatedComp from "./updatedComp";
class ClickCounter extends React.Component {
  render() {
    return (
      <>
        <button onClick={this.props.incrcount}>
          clicked {this.props.count} times
        </button>
      </>
    );
  }
}

export default updatedComp(ClickCounter, 1);
