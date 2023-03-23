import { Image, View } from "react-native";
import { styles } from "../stylesheet/app";

export default function ImagenView({ src, image }) {
  const imageSource = image === null ? src : { uri: image };

  return (
    <View style={styles.contIMG}>
      <Image source={imageSource} style={styles.img} />
    </View>
  );
}
