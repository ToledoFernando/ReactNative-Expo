import { Modal, View, Text, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "../stylesheet/app";

function EmojiPicker({ isVisible, onClose, children }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Chose a Stickers</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={22} color="#fff" />
          </Pressable>
        </View>
      </View>
      {children}
    </Modal>
  );
}

export default EmojiPicker;
