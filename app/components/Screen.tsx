import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";

type ScreenProps = {
  style?: Object;
  children: any;
};
const Screen = ({style,children,...otherProps}: ScreenProps) => {
  return (
    <SafeAreaView {...otherProps} style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});
