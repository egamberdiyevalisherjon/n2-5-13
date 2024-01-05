import { List } from "antd";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  const navigate = useNavigate();

  return (
    <div className="py-6">
      {!products.length && (
        <div className="w-32">
          <Button onClick={() => navigate("/")}>Products</Button>
        </div>
      )}
      <h2 className="text-6xl">Your Cart</h2>
      <List
        itemLayout="horizontal"
        dataSource={products}
        renderItem={(item) => <CartItem key={item.id} item={item} />}
        locale={{ emptyText: "No product added" }}
      />
      {products.length && <Button>Proceed to Payment</Button>}
    </div>
  );
};

export default Cart;
