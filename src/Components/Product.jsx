import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      cover={<img className="h-64" alt="example" src={product.image} />}
    >
      <Meta
        title={product.title}
        description={product.description.slice(0, 50)}
      />
      <div className="my-4">
        <Button
          onClick={() => {
            let products = JSON.parse(localStorage.getItem("products") || "[]");
            let prod = products.find((p) => p.id === product.id);
            if (prod) prod.count++;
            else products.push({ id: product.id, count: 1 });
            localStorage.setItem("products", JSON.stringify(products));
            navigate("cart");
          }}
        >
          Add To Cart
        </Button>
      </div>
    </Card>
  );
};

export default Product;
