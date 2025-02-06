/**
 * Challenge: Start a brand new React app!
 * - Create a separate App component
 * - Import and render the App component here
 * - In the App component, render a <main> element
 * - Style everything to look like the slide
 */
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
