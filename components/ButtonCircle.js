import React from "react";
import { View, Text, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "../stylesheet/app";

function ButtonCircle({ onPress }) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.buttonCircle} onPress={onPress}>
        <MaterialIcons style={styles.add} name="add" size={40} color="#000" />
      </Pressable>
    </View>
  );
}

export default ButtonCircle;
