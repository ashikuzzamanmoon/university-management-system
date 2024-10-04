import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: "Student Dashboard",
    label: <NavLink to="/">Student Dashboard</NavLink>,
  },
  {
    key: "Faculty Management",
    label: <NavLink to="/faculty">Faculty Management</NavLink>,
  },
  {
    key: "Course Registration",
    label: <NavLink to="/course-register">Course Registration</NavLink>,
  },
];

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  // Determine the active menu item based on the current URL
  const activeKey =
    items.find((item) => location.pathname === item.label.props.to)?.key ||
    "Student Dashboard";

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          position: "fixed",
          height: "100vh",
          left: 0,
          top: 0,
          bottom: 0,
        }} // Sidebar fixed
      >
        <div />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[activeKey]} // Set the active menu item
          items={items}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? "0" : "20px" }}>
        {" "}
        {/* Adjust margin when collapsed */}
        <Header
          style={{
            position: "fixed", // Header fixed
            top: 0,
            left: collapsed ? "0" : "200px", // Adjust position when collapsed
            right: 0,
            zIndex: 1,
            padding: 0,
            background: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "18px",
              width: 64,
              height: 64,
            }}
          />
          <h2
            style={{
              marginLeft: "16px",
              fontSize: window.innerWidth < 768 ? "18px" : "28px",
              fontWeight: 600,
            }}
          >
            University Management System
          </h2>
        </Header>
        <Content
          style={{
            marginTop: "76px", // Offset for the fixed header
            marginLeft: collapsed ? "0" : "200px", // Adjust margin for sidebar
            padding: "24px",
            overflowY: "auto", // Only Content scrolls
            height: "calc(100vh - 64px)", // Content height minus the header
            background: "#fff",
            borderRadius: "8px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
