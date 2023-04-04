import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import constants from "../config/constants";

type PropsType = {
  children?: string;
  style?: any;
  numberOfLines?: number;
};

const AppText = ({ children, style, ...otherProps }: PropsType) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: constants.DEFAULT_TEXT_SIZE,
    color: colors.black,
    fontFamily: "Roboto",
  },
});
