import React from "react";
import ReactDOM from "react-dom";
const wasm = import("../build/react_rust_wasm");

wasm.then(wasm => {
    const App = () => (
        <div>
            <h1>Hi there</h1>
            <button onClick={bigComputation}>Run Computation</button>
        </div>
    );

    ReactDOM.render(<App />, document.getElementById("root"));
});
