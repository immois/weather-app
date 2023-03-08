import { RefObject, useEffect } from "react";
type Event = MouseEvent | TouchEvent;
type Handler = (event: Event) => void;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler
) => {
  useEffect(
    () => {
      const listener = (e: Event) => {
        // Do nothing if clicking ref's element or descendent elements
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
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};
