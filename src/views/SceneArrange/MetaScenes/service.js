import request from "@/service/request";

export const getScenes = async () => {
  const { data } = await request.get(
    "/scene-arrange/metadata/scenes/get-scenes"
  );
  return data;
};

export const setScene = async (params) => {
  const { data } = await request.post(
    "/scene-arrange/metadata/scenes/set-scene",
    params
  );
  return data;
};
