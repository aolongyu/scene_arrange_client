import { Table } from "antd";
import { createColumns } from "./columns";

function TableView({ dataSource }) {
  const columns = createColumns();

  return <Table dataSource={dataSource} columns={columns} />;
}

export default TableView;
