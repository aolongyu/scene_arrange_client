import { useState, useEffect } from "react";
import TableView from "./components/TableView/index";
import RowView from "./components/RowView/index";
import { getFunctions, setFunction } from "./service";

function SceneArrangeMetaFunctions() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadTableData = async () => {
    setLoading(true);
    const data = await getFunctions();
    setDataSource(data);
    setLoading(false);
  };

  useEffect(() => {
    loadTableData();
  }, []);

  const handleCreate = async (params) => {
    setLoading(true);
    await setFunction(params);
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

export default SceneArrangeMetaFunctions;
