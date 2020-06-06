import React from "react"
const Slim = ({ children }) => {
  return (
    <div>
      <h2>SLIM layout</h2>
      <h3>Content START</h3>
      {children}
      <h3>Content END</h3>
    </div>
  )
}

export default Slim
