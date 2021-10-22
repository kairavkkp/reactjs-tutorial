import React from "react";

const updatedComp = (OriginalCompo, incrno = 1) => {
  class NewCompo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
      this.incr = this.incr.bind(this);
    }

    incr = () => {
      this.setState((prevState) => {
        return { counter: prevState.counter + incrno };
      });
    };

    render() {
      return (
        <OriginalCompo
          incrcount={this.incr}
          count={this.state.counter}
          {...this.props}
        />
      );
    }
  }
  return NewCompo;
};

export default updatedComp;
