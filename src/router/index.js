import { createHashRouter } from "react-router";

import DeepSeekChat from "@/pages/DeepSeekChat/index";
import SceneArrange from "@/pages/SceneArrange/index";

const router = createHashRouter([
  {
    path: "/deepseek-chat",
    Component: DeepSeekChat,
  },
  {
    path: "/scene-arrange",
    Component: SceneArrange,
  },
]);

export default router;
