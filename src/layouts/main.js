import React from "react"

const Main = ({ children }) => {
  return (
    <div>
      <h2>MAIN layout</h2>
      <h3>CONTENT START</h3>
      {children}
      <h3>CONTENT END</h3>
    </div>
  )
}
export default Main
