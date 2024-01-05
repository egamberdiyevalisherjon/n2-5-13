import { Avatar, List, Spin } from "antd";
import useFetch from "../hooks/useFetch";

const CartItem = ({ item }) => {
  const { data: product, isLoading } = useFetch(`/products/${item.id}`);
  return (
    <List.Item>
      {isLoading || !product ? (
        <Spin />
      ) : (
        <List.Item.Meta
          avatar={<Avatar src={product.image} />}
          title={product.title}
          description={`$${product.price} x ${item.count} = $${
            item.count * product.price
          }`}
        />
      )}
    </List.Item>
  );
};

export default CartItem;
