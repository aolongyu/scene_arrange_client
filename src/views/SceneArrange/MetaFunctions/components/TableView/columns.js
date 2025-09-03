export const createColumns = ({ operationRender = () => {} }) => {
  return [
    // {
    //   title: "No.",
    //   dataIndex: "no",
    //   key: "no",
    // },
    {
      title: "Function Key",
      dataIndex: "functionKey",
      key: "functionKey",
    },
    {
      title: "Function Name",
      dataIndex: "functionName",
      key: "functionName",
    },
    {
      title: "Function Description",
      dataIndex: "functionDescription",
      key: "functionDescription",
    },

    {
      title: "Function Parameters",
      dataIndex: "functionParameters",
      key: "functionParameters",
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: operationRender,
    },
  ];
};
