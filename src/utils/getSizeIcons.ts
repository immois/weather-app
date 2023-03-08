import { SizeIcons } from "@/types/global";

export const getSizeIcons = (size: SizeIcons) => {
  if (size === "sm") {
    return 60;
  }

  if (size === "md") {
    return 180;
  }

  if (size === "xl") {
    return 290;
  }
};
