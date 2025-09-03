import { Table, Button } from "antd";
import { createColumns } from "./columns";

function TableView({ dataSource }) {
  const onEditClick = (record) => {
    console.log(record);
  };

  const columns = createColumns({
    operationRender: () => (
      <Button type="link" onClick={(_, record) => onEditClick(record)}>
        Edit
      </Button>
    ),
  });

  return <Table dataSource={dataSource} columns={columns} />;
}

export default TableView;
