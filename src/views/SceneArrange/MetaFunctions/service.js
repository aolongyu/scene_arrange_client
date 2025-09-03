import request from "@/service/request";

export const getFunctions = async () => {
  const { data } = await request.get(
    "/scene-arrange/metadata/functions/get-functions"
  );
  return data;
};

export const setFunction = async (params) => {
  const { data } = await request.post(
    "/scene-arrange/metadata/functions/set-function",
    params
  );
  return data;
};
