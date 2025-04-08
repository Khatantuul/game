import React from 'react'
import withError from './withError'
import withErrorCurried from './withErrorCurried'

function ComponentC() {
    console.log("Post inside C", post) 
    //withError (componentDidCatch) also caught the ReferenceError
    //of accessing before declaration
    const post = {
        title: "Some title",
        body: "loremsighsioehgishegh"
    }
  return (
    <div>This is C</div>
  )
}

export default withErrorCurried({
  wrapper: (errorMsg) => {
    return <div style={{backgroundColor: "red", color: 'white'}}>{errorMsg}</div>
  },
  componentName: 'ComponentC',
  onError: (errorType) => console.log(errorType)
})(ComponentC)