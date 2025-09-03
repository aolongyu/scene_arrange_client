import { Button, Modal, Form, Input, Select } from "antd";
import { useState, useEffect } from "react";
import { getScenes } from "../../../MetaScenes/service";

function CreateView(props) {
  const [sceneOptions, setSceneOptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    (async () => {
      const data = await getScenes();
      setSceneOptions(
        data.map((item) => ({ label: item.sceneName, value: item.sceneKey }))
      );
    })();
  }, []);

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const formData = form.getFieldsValue();
    await props.onCreate(formData);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={handleCreateClick}>
        Create
      </Button>

      <Modal
        title="Create Function"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Scene Name" name="sceneName">
            <Select options={sceneOptions} />
          </Form.Item>
          <Form.Item label="Function Name" name="functionName">
            <Input />
          </Form.Item>
          <Form.Item label="Function Description" name="functionDescription">
            <Input />
          </Form.Item>
          <Form.Item label="Function Parameters" name="functionParameters">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default CreateView;
