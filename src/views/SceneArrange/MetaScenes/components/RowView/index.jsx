import { Button, Modal, Form, Input, Select } from "antd";
import { useState, useEffect } from "react";
import { getFunctions } from "../../../MetaFunctions/service";

function RowView(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [functionOptions, setFunctionOptions] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getFunctions();
      setFunctionOptions(
        data.map((item) => ({
          label: `${item.functionName} - ${item.functionDescription}`,
          value: item.functionKey,
        }))
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
        title="Create Scene"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Scene Name" name="sceneName">
            <Input />
          </Form.Item>
          <Form.Item label="Scene Functions" name="sceneFunctions">
            <Select mode="multiple" options={functionOptions} />
          </Form.Item>
          <Form.Item label="Scene Description" name="sceneDescription">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default RowView;
