import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "./stylesheet/app";
import * as ImagePicker from "expo-image-picker";
import ImagenView from "./components/Imagen";
import Button from "./components/Button";
import ButtonCircle from "./components/ButtonCircle";
import IconButton from "./components/IconButton";
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from "./components/EmojiList";
import EmojiPegatina from "./components/EmojiPegatina";

const imagen = require("./assets/image/img1.jpg");

export default function App() {
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [img, setIMG] = useState(null);

  const selecImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setIMG(result.assets[0].uri);
      setShowOptions(true);
    } else {
      alert("No se proporciono una Imagen");
    }
  };

  const addSticker = () => setModalVisible(true);

  const closeModal = () => setModalVisible(false);

  const onReset = () => setShowOptions(false);

  const onSave = () => alert("XDXDXDDDD");

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <ImagenView src={imagen} image={img} />
      {showOptions ? (
        <View style={styles.buttonContain}>
          <IconButton onPress={onReset} icon="refresh" label={"Reset"} />
          {pickedEmoji !== null ? (
            <EmojiPegatina imageSize={40} stickerSource={pickedEmoji} />
          ) : null}
          <ButtonCircle onPress={addSticker} />
          <IconButton onPress={onSave} icon="save-alt" label="Save" />
          <EmojiPicker isVisible={modalVisible} onClose={closeModal}>
            <EmojiList onSelect={setPickedEmoji} onCloseModal={closeModal} />
          </EmojiPicker>
        </View>
      ) : (
        <>
          <Button label={"Seleccionar imagen"} selecImage={selecImage} />
          <Button
            label={"Usar esta foto"}
            selecImage={() => setShowOptions(true)}
          />
        </>
      )}
    </View>
  );
}
