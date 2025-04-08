import { Component } from "react";

function withErrorCurried(renderConfigObj){
    return function(OldComponent){
        return class NewComponent extends Component{
            constructor(props){
                super(props);
                this.state = {
                    hasError: false,
                    errorMessage: ''
                }
            }

            componentDidCatch(error){
                this.setState({hasError: true, errorMessage: error.toString()})
            }

            render(){
                if(this.state.hasError){
                    return (
                        <>
                        <h1>Below error happened inside component {renderConfigObj.componentName}</h1>
                        {renderConfigObj.wrapper(this.state.errorMessage)}
                        </>
                    )
                }
                return <OldComponent {...this.props}/>
            }

        }
    }
}

export default withErrorCurried