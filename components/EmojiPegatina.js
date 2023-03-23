import { useState } from "react";
import { View, Image } from "react-native";
import { styles } from "../stylesheet/app";

function EmojiPegatina({ imageSize, stickerSource }) {
  return (
    <View style={styles.pegatina}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}

export default EmojiPegatina;
