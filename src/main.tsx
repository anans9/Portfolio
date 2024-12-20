import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { InitialContextProvider } from "./context/useContext.tsx";
import App from "./App.tsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <InitialContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </InitialContextProvider>
);
