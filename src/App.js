import Home from "./Components/HomePage/Home";
import MenProduct from "./pages/Products/MenProduct";
import Cart from "./pages/Cart/Cart";
import { useAuth } from "./pages/Auth/firebase";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Signin from "./pages/Auth/Signin";
import Login from "./pages/Auth/Login";
import Payment from "./pages/PaymentPage/Payment";

// import Cart from "./pages/Cart/Cart";

function App() {
  let user = useAuth();

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<MenProduct />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/cart" element={<Cart />} />
          <Route path="/register" element={<Signin />}></Route>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          ></Route>
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>

      {/* <Login />
      <Signin /> */}
    </div>
  );
}

export default App;
