import { TableState, RowsState } from "./types";

export const initialTableState: TableState = {
  touched: false,
  selectionState: {
    selectedCols: [],
    selected: false,
  },
};

export const initialRowsState: RowsState = [
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
];
