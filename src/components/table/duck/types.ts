import React from "react";

export type AnyDispatch = React.Dispatch<any>;

export interface SketchContext {
  state: TableState;
  dispatch: AnyDispatch;
}

export interface TableState {
  touched: boolean;
  selectionState: SelectionStateType;
  rows: RowType[];
}

export interface SelectionStateType {
  selected: boolean;
  selectedCols: PositionStateType[];
  start?: PositionStateType;
  end?: PositionStateType;
}

export interface PositionStateType {
  rowId: number;
  colId: number;
}

export interface RowType {
  id: number;
  height?: number;
  cols: ColType[];
}

export interface ColType {
  id: number;
  type: string;
  display: boolean;
  content: string;
  background?: string;
  rowSpan?: number;
  colSpan?: number;
}

export interface RangeType {
  row: {
    min: number;
    max: number;
  };
  col: {
    min: number;
    max: number;
  };
}
