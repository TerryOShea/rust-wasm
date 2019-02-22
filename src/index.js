import React from "react";
import ReactDOM from "react-dom";

const bigComputation = () => alert('Big computation in JavaScript');

const App = () => (
    <div>
        <h1>Hi there</h1>
        <button onClick={bigComputation}>Run Computation</button>
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
