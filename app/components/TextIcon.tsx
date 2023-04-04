import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import constants from "../config/constants";

const TextIcon = ({
  title,
  size = 50,
  backgroundColor = "dodgerblue",
  initials,
}: TextIconPropsType) => {
  if (!initials) {
    initials = [];

    let words = title.split(" ");
    initials[0] = words[0][0];

    if (words.length > 1) {
      initials[1] = words[1][0];
    }
  }

  return (
    <View
      style={[
        styles.container,
        {
          height: size,
          width: size,
          borderRadius: 0.5 * size,
          backgroundColor,
        },
      ]}
    >
      <Text style={[styles.iconText, { fontSize: size * 0.6 }]}>
        {initials.map((it) => it.toUpperCase())}
      </Text>
    </View>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: constants.DEFAULT_MARGIN,
  },
  iconText: {
    color: "white",
    fontWeight: "700",
  },
});

type TextIconPropsType = {
  title: string;
  size?: number;
  backgroundColor?: string;
  initials?: string[];
};
