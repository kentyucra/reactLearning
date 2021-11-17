// Objective
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
  // a. An h1 with your name
  // b. A paragraph owith a tittle blurb about yourself
  // c. An ordered or urodered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own how you can add some style to you page.

import React from "react"
import ReactDOM from "react-dom"

const divStyle = {
  border: '3px solid rgba(0, 0, 0, 1.00)'
}

function MyInfo() {
  return (
    <div style={divStyle}>
      <h1> Kent Yucra </h1>
      <p> I am a software engineer and I love to learn</p>
      <ul>
        <li>Brazil the carnaval</li>
        <li>Amsterdam again</li>
        <li>Bolivia</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))
