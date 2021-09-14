import { TableState } from "./types";

const tableState: TableState = {
  editableCol: 0,
  touched: false,
  selectionState: {
    selected: false,
  },
  rows: [
    {
      id: 1,
      cols: [
        {
          content: "",
          type: "text",
          display: true,
          id: 1,
        },
        {
          content: "",
          type: "text",
          display: true,
          id: 2,
        },
      ],
    },
  ],
};

export default tableState;
