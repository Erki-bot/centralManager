import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const RoundIcon = (props: {
  name: string;
  backgroundColor?: string;
  size?: number;
  iconColor?: string;
}) => {
  let size = props.size || 40;
  return (
    <View
      style={{
        backgroundColor: props.backgroundColor || "black",
        width: size || 40,
        height: size || 40,
        borderRadius: size * 0.5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={props.name}
        size={size * 0.5}
        color={props.iconColor || "white"}
      />
    </View>
  );
};

export default RoundIcon;

const styles = StyleSheet.create({
  icon: {},
});
