import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;

import Header from "../Partials/Header/index";
import Footer from "../Partials/Footer/index";

const Main = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <div className="main-layout-content container mx-auto">
          <Outlet />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Main;
