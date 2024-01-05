import { Layout, Menu } from "antd";
import "./header.module.scss";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
const { Header: ANTHeader } = Layout;

const Header = () => {
  const [selectedKeys, setSelectedKeys] = useState(["1"]);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") setSelectedKeys(["1"]);
    if (pathname === "/cart") setSelectedKeys(["2"]);
  }, [pathname]);

  const menuItems = useMemo(
    () => [
      {
        key: 1,
        label: "Home",
        onClick: () => navigate("/"),
      },
      {
        key: 2,
        label: "Cart",
        onClick: () => navigate("/cart"),
      },
    ],
    [navigate]
  );

  return (
    <ANTHeader id="main-header">
      <Link className="text-blue-500 hover:text-blue-300" to={"/"}>
        DEVMART
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        selectedKeys={selectedKeys}
        items={menuItems}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </ANTHeader>
  );
};

export default Header;
