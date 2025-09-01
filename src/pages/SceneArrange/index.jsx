import "./index.css";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import {} from "./config";

function SceneArrange() {
  const [form] = Form.useForm();

  const handleFetch = async () => {
    const formData = form.getFieldsValue();
    const response = await axios.post(
      `http://localhost:3000/api/scene-arrange/single-chain-function-call`,
      {
        // sessionId: formData.sessionId,
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
          // sessionId: "scene-arrange-001",
          content: "4和5求和，8和10求和，前面两结果相乘，结果是多少？",
        }}
      >
        {/* <Form.Item label="Session ID" name="sessionId">
          <Input />
        </Form.Item> */}
        <Form.Item label="Content" name="content">
          <Input.TextArea rows={16} />
        </Form.Item>
      </Form>
    </>
  );
}

export default SceneArrange;
