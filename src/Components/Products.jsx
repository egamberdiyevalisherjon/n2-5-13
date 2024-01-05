import { Col, Row } from "antd";
import useFetch from "../hooks/useFetch";
import Product from "./Product";
import ProductLoading from "./ProductLoading";

const Products = ({ selectedCategory }) => {
  const { data, isLoading } = useFetch(
    selectedCategory === "all"
      ? "/products"
      : `/products/category/${selectedCategory}`
  );

  return (
    <div className="py-6">
      <Row gutter={[12, 12]}>
        {isLoading
          ? Array(6)
              .fill(0)
              .map((_, index) => (
                <Col span={8} key={index}>
                  <ProductLoading />
                </Col>
              ))
          : data?.map((product) => (
              <Col span={8} key={product.id}>
                <Product product={product} />
              </Col>
            ))}
      </Row>
    </div>
  );
};

export default Products;
