import { Component } from "react";

function withErrorCurried(renderConfigObj={}){
    const renderConfig = {
        onError: () => {},
        ...renderConfigObj
    }
    return function(OldComponent){
        return class NewComponent extends Component{
            constructor(props){
                super(props);
                this.state = {
                    hasError: false,
                    errorMessage: '',
                    errorType: ''
                }
            }

            componentDidCatch(error){
                this.setState({hasError: true, errorMessage: error.toString(),
                    errorType: error.name
                })
            }

            render(){
                if(this.state.hasError){
                    renderConfig.onError(this.state.errorType)
                    return (
                        <>
                        <h1>Below error happened inside component {renderConfig.componentName}</h1>
                        {renderConfig.wrapper(this.state.errorMessage)}
                        </>
                    )
                }
                return <OldComponent {...this.props}/>
            }

        }
    }
}

export default withErrorCurried