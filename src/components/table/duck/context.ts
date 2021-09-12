import * as React from "react";
import { SketchContext as SketchContextType } from "./types";

export const TableContext = React.createContext<SketchContextType>(
  null as any
);
