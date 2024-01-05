import { Routes, Route } from "react-router-dom";

// Page
import NotFound from "./Pages/NotFound";
import Main from "./Layouts/Main";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
