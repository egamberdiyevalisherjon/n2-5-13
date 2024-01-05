import { Segmented, Spin } from "antd";
import useFetch from "../hooks/useFetch";

const CategoryTabs = ({ setSelectedCategory }) => {
  const { data, isLoading } = useFetch("/products/categories");

  const options =
    data?.map((item) => ({
      label: item.toUpperCase(),
      value: item,
    })) || [];

  options.unshift({ label: "ALL", value: "all" });

  return isLoading || data === null ? (
    <Spin />
  ) : (
    <div className="text-end">
      <Segmented onChange={setSelectedCategory} options={options} />
    </div>
  );
};

export default CategoryTabs;
