import { RefObject, useEffect } from "react";
type Event = MouseEvent | TouchEvent;
type Handler = (event: Event) => void;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler
) => {
  useEffect(() => {
    const listener = (e: Event) => {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return;
      }
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
