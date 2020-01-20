import React from "react";

import { Text } from "@components/Text";

interface LabelProps {
  title: string;
}

export const Label: React.FunctionComponent<LabelProps> = ({ title }) => {
  return (
    <Text bold uppercase h4>
      {title}
    </Text>
  );
};
