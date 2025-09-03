import { useState, useEffect } from "react";
import TableView from "./components/TableView/index";
import RowView from "./components/RowView/index";
import { getScenes, setScene } from "./service";

function SceneArrangeScenes() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadTableData = async () => {
    setLoading(true);
    const data = await getScenes();
    setDataSource(data);
    setLoading(false);
  };

  useEffect(() => {
    loadTableData();
  }, []);

  const handleCreate = async (params) => {
    setLoading(true);
    await setScene(params);
    loadTableData();
    setLoading(false);
  };

  return (
    <>
      <RowView onCreate={handleCreate} />
      <TableView dataSource={dataSource} loading={loading} />
    </>
  );
}

export default SceneArrangeScenes;
