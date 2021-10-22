import React from "react";
import updatedCompo from "./updatedComp";
class HoverCounter extends React.Component {
  render() {
    return (
      <>
        <h1 style={{color:'blue'}}onMouseOver={this.props.incrcount}>
          Hovered {this.props.count} times 
        </h1>
        
      </>
    );
  }
}
export default updatedCompo(HoverCounter,3);
