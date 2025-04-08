import { Component } from "react";

function withError(OldComponent, wrapper) {
  return class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
        errorMsg: "",
      };
    }

    componentDidCatch(error) {
      //   console.log("Error in withError", error);
      this.setState({ hasError: true, errorMsg: error.toString() });
    }

    render() {
      if (this.state.hasError) {
        if (wrapper === undefined) {
            return <h2>Something went wrong</h2>
        } else {
          return wrapper(this.state.errorMsg);
        }
      }
      return <OldComponent {...this.props} />;
    }
  };
}

export default withError;
