import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import { ShoppingCartProvider } from "./ShoppingCartContext";

import "./App.css";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Router>
          <div>
            <AppRoutes />
          </div>
        </Router>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
