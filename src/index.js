// ########### ReactDOM.render is no longer supported in React 18 ###########
// import { render } from "react-dom";
// import App from "./components/App";
// render(<App />, document.getElementById("root"));

// ########### following code supported in React 18 ###########
import App from "./components/App";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
