import { TableState } from "./types";

const tableState: TableState = {
  touched: false,
  selectionState: {
    selected: false,
  },
  rows: [
    {
      id: 1,
      height: 60,
      cols: [
        { id: 1, content: "11", type: "text" },
        { id: 2, content: "12", type: "text" },
        { id: 3, content: "13", type: "text" },
      ],
    },
    {
      id: 2,
      height: 50,
      cols: [
        { id: 1, content: "21", type: "text" },
        { id: 2, content: "22", type: "text" },
        { id: 3, content: "23", type: "text" },
      ],
    },
    {
      id: 3,
      height: 70,
      cols: [
        { id: 1, content: "31", type: "text" },
        { id: 2, content: "32", type: "text" },
        { id: 3, content: "33", type: "text" },
      ],
    },
  ],
};

export default tableState;
