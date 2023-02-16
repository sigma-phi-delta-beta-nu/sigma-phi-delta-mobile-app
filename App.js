import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Barlet from "./components/barlet";

export default function App() {
  // passing icons as property to each barlet icon
  // could easily change how the info is passed to each barlet, this is a placeholder
  const icons = [
    {
      id: 1,
      name: "Pledge",
      img_src: "blank",
    },
    {
      id: 2,
      name: "Forms",
      img_src: "blank",
    },
    {
      id: 3,
      name: "Calendar",
      img_src: "blank",
    },
  ];
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.innerText}>Pro Bono</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.body} />
      <SafeAreaView style={styles.footer}>
        <Barlet icon={icons[0]} />
        <Barlet icon={icons[1]} />
        <Barlet icon={icons[2]} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "#1E2022",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#52616B",
  },
  body: {
    flex: 15,
    backgroundColor: "#1E2022",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1E2022",
    borderTopWidth: 1,
    borderTopColor: "#52616B",
    justifycontent: "between",
  },
  innerText: {
    color: "white",
    fontSize: 30,
  },
});
