import React from "react";

import { Text } from "@components/Text";

import { MenuHeaderContainer } from "./MenuHeaderContainer";

export const MenuHeader: React.FunctionComponent = ({ children }) => {
  return (
    <MenuHeaderContainer>
      <Text sub1 bold uppercase>
        {children}
      </Text>
    </MenuHeaderContainer>
  );
};
