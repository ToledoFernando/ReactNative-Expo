import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#08081c",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  contIMG: {
    flex: 1,
    paddingTop: 58,
  },
  img: {
    width: 300,
    height: 400,
    borderRadius: 40,
  },

  butonIMG: {
    backgroundColor: "#fff",
    padding: 15,
    width: 60 + "%",
    borderRadius: 10,
    marginBottom: 80,
  },

  butonText: {
    fontSize: 20,
    textAlign: "center",
  },

  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 42,
    padding: 3,
  },
  buttonCircle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },

  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },

  buttonContain: {
    position: "absolute",
    bottom: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },

  modalContent: {
    height: 110,
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },

  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    bottom: 20,
    position: "absolute",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  pegatina: {
    position: "absolute",
    top: -350,
  },
});
