import React from "react";

import { Button } from "@components/Button";
import { Colors } from "@common/Colors";

interface MenuItemProps
  extends Omit<React.ComponentProps<typeof Button>, "minimal" | "size"> {}

export const MenuItem: React.FunctionComponent<MenuItemProps> = props => {
  return (
    <Button
      intent="none"
      isMenuButton
      size="small"
      iconColor={Colors.black}
      {...props}
    />
  );
};
