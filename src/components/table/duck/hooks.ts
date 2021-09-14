import * as React from "react";

export const useOutsideClick = <T extends HTMLElement>(
  callback: (event: Event) => void,
  options?: { eventNames: string[] }
): React.RefObject<T> => {
  const { eventNames = ["mousedown", "touchstart"] } = options || {};

  const ref = React.useRef<T>(null);

  React.useEffect(() => {
    const handleEvent = (event: Event): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    eventNames.forEach((name) => document.addEventListener(name, handleEvent));

    return () => {
      eventNames.forEach((name) =>
        document.removeEventListener(name, handleEvent)
      );
    };
  }, [callback, eventNames]);

  return ref;
};
