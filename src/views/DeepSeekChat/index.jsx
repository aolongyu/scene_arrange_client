import "./index.css";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { API_NAMES, API_OPTIONS } from "./config";

function DeepSeekChat() {
  const [form] = Form.useForm();

  const handleFetch = async () => {
    const formData = form.getFieldsValue();
    const response = await axios.post(
      `http://localhost:3000/api${formData.path}`,
      {
        sessionId: formData.sessionId,
        content: formData.content,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  };

  return (
    <>
      <Button type="primary" onClick={handleFetch}>
        Fetch
      </Button>
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          sessionId: "1",
          path: API_NAMES.SCENE_ARRANGE_SINGLE_CHAIN_FUNCTION_CALL,
          content:
            "首函数入参x字符串，数组函数[\"const a = (param) => { return param + 'a' }]}\", \"const b = (param) => { return param + 'b' }\", \"const c = (param) => { return param + 'c' }\", \"const d = (param) => { return param + 'd' }\"]",
        }}
      >
        <Form.Item label="Session ID" name="sessionId">
          <Input />
        </Form.Item>
        <Form.Item label="API" name="path">
          <Select options={API_OPTIONS} />
        </Form.Item>
        <Form.Item label="Content" name="content">
          <Input.TextArea rows={16} />
        </Form.Item>
      </Form>
    </>
  );
}

export default DeepSeekChat;
