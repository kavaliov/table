import React from "react";

export type AnyDispatch = React.Dispatch<any>;

export type RowsState = RowType[];

export interface TableContext {
  tableState: TableState;
  dispatchTableState: AnyDispatch;
  rowsState: RowsState;
  dispatchRowsState: AnyDispatch;
}

export interface TableState {
  touched: boolean;
  selectionState: SelectionStateType;
}

export interface SelectionStateType {
  selected: boolean;
  selectedCols: SelectedColsType[];
  start?: PositionStateType;
  end?: PositionStateType;
}

export interface SelectedColsType extends PositionStateType {
  rowSpan?: number;
  colSpan?: number;
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
  content: any;
  resourceFor?: PositionStateType;
  resources?: PositionStateType[];
  background?: string;
  width?: number;
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
