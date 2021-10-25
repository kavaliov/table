import { HEADERS } from "./constants";

export const getLabel = (value: string): string => {
  let label = "unstyled";

  HEADERS.forEach((header) => {
    if (header.value === value) {
      label = header.label;
    }
  });

  return label;
};
