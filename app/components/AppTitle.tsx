import { StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";
import constants from "../config/constants";

type PropsType = {
  children?: string;
  style?: any;
  numberOfLines?: number;
};

const AppTitle = ({ children, style, ...otherProps }: PropsType) => {
  return (
    <AppText style={[styles.text, style]} {...otherProps}>
      {children}
    </AppText>
  );
};

export default AppTitle;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.black,
    fontFamily: "Roboto",
    fontWeight: constants.TITLE_TEXT_WEIGHT,
  },
});
