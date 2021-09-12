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
  start?: PositionStateType;
  end?: PositionStateType;
}

export interface PositionStateType {
  rowId: number;
  colId: number;
}

export interface RowType {
  id: number;
  height: number;
  cols: ColType[];
}

export interface ColType {
  id: number;
  type: string;
  content: string;
  rowSpan?: number;
  colSpan?: number;
}
