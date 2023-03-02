import React from "react";
// import Navbar from "./components/Navbar";
import Register from "./pages/Register";

import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Register/>
      <AppRouter />
    </div>
  );
};

export default App;
