import { createHashRouter } from "react-router";

import DeepSeekChat from "@/views/DeepSeekChat/index";
import DeepSeekFC from "@/views/DeepSeekFC/index";
import SceneArrangeMetaScenes from "@/views/SceneArrange/MetaScenes/index";
import SceneArrangeMetaFunctions from "@/views/SceneArrange/MetaFunctions/index";

const router = createHashRouter([
  {
    path: "/deepseek-chat",
    Component: DeepSeekChat,
  },
  {
    path: "/deepseek-function-calling",
    Component: DeepSeekFC,
  },
  {
    path: "/scene-arrange",
    children: [
      {
        path: "/scene-arrange/meta-functions",
        Component: SceneArrangeMetaFunctions,
      },
      {
        path: "/scene-arrange/meta-scenes",
        Component: SceneArrangeMetaScenes,
      },
    ],
  },
]);

export default router;
