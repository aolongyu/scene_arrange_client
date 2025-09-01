export const API_NAMES = {
  DEEPSEEK_SINGLE_CHAT_COMPLETION: "/deepseek/single-chat-completion",
  DEEPSEEK_CONTINUOUS_CHAT_COMPLETION: "/deepseek/continuous-chat-completion",
  SCENE_ARRANGE_SINGLE_CHAIN_FUNCTION_CALL:
    "/scene-arrange/single-chain-function-call",
  SCENE_ARRANGE_MULTI_CHAIN_FUNCTION_CALL:
    "/scene-arrange/multi-chain-function-call",
};

export const API_OPTIONS = [
  // {
  //   label: "DeepSeek Single Chat Completion",
  //   value: API_NAMES.DEEPSEEK_SINGLE_CHAT_COMPLETION,
  // },
  // {
  //   label: "DeepSeek Continuous Chat Completion",
  //   value: API_NAMES.DEEPSEEK_CONTINUOUS_CHAT_COMPLETION,
  // },
  {
    label: "Scene Arrange Single Chain Function Call",
    value: API_NAMES.SCENE_ARRANGE_SINGLE_CHAIN_FUNCTION_CALL,
  },
  {
    label: "Scene Arrange Multi Chain Function Call",
    value: API_NAMES.SCENE_ARRANGE_MULTI_CHAIN_FUNCTION_CALL,
    default: true,
  },
];
