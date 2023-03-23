import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../stylesheet/app";

function Button({ selecImage, label }) {
  return (
    <Pressable style={styles.butonIMG} onPress={selecImage}>
      <Text style={styles.butonText}>{label}</Text>
    </Pressable>
  );
}

export default Button;
