import { Layout } from "antd";

const Footer = () => {
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
      }}
    >
      DEVMART ©{new Date().getFullYear()} Created by N2
    </Layout.Footer>
  );
};

export default Footer;
