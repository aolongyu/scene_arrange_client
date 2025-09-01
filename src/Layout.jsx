import { Outlet, RouterProvider } from "react-router";
import router from "./router";

import { Menu } from "antd";
import { PieChartOutlined, DesktopOutlined } from "@ant-design/icons";
import { useState } from "react";

const items = [
  { key: "deepseek-chat", icon: <PieChartOutlined />, label: "DeepSeek Chat" },
  { key: "scene-arrange", icon: <DesktopOutlined />, label: "Scene Arrange" },
];

function Left() {
  const [current, setCurrent] = useState("scene-arrange");

  const onMenuClick = (e) => {
    const { key } = e;
    setCurrent(key);
    router.navigate(`/${key}`);
  };

  return (
    <div className="w-64 h-full">
      <Menu
        className="h-full"
        defaultSelectedKeys={[current]}
        mode="inline"
        theme="light"
        items={items}
        onClick={onMenuClick}
      />
    </div>
  );
}

function Right() {
  return (
    <div className="flex-1 h-full p-4">
      <RouterProvider router={router} />
    </div>
  );
}

function Layout() {
  return (
    <div className="flex h-screen">
      <Left />
      <Right />
    </div>
  );
}

export default Layout;
