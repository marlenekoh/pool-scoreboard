import React, { useState, useEffect } from "react";
import CountDown from "react-native-countdown-component";

interface Time {
  isTimeStart: boolean;
  isReset: boolean;
}

export const Timer: React.FunctionComponent<Time> = ({
  isTimeStart,
  isReset,
}) => {
  // const [id, setid] = useState(0);

  // useEffect(() => {
  //   if (isReset) setid(id + 1);
  // });

  return (
    <CountDown
      // id={`$(id + 1)`}
      until={10}
      onFinish={() => {
        isReset = true;
      }}
      running={isTimeStart}
      timeToShow={["S"]}
      digitStyle={{
        backgroundColor: "#FFF",
        borderWidth: 2,
        borderColor: "#1CC625",
      }}
      digitTxtStyle={{ color: "#1CC625" }}
      timeLabelStyle={{ color: "black", fontWeight: "bold" }}
      size={50}
      timeLabels={{}}
    />
  );
};
