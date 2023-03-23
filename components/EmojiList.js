import { FlatList, Image, Pressable } from "react-native";
import { styles } from "../stylesheet/app";
import { useState } from "react";

function EmojiList({ onSelect, onCloseModal }) {
  const [emogi] = useState([
    require("../assets/emojis/1.png"),
    require("../assets/emojis/2.png"),
    require("../assets/emojis/3.png"),
    require("../assets/emojis/1.png"),
    require("../assets/emojis/2.png"),
    require("../assets/emojis/3.png"),
    require("../assets/emojis/1.png"),
    require("../assets/emojis/2.png"),
    require("../assets/emojis/3.png"),
    require("../assets/emojis/1.png"),
    require("../assets/emojis/2.png"),
    require("../assets/emojis/3.png"),
  ]);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
      data={emogi}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
          >
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}
export default EmojiList;
