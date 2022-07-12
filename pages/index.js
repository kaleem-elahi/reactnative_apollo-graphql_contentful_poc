import {
  StyleSheet,
  View,
} from "react-native";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <View style={styles.container}>
      <Posts/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "50%", marginLeft: "auto", marginRight: "auto" },
  heading: { fontSize: "2rem", marginTop: "1rem", marginBottom: "1rem" },
  input: {
    borderColor: "#000",
    borderWidth: "1px",
    padding: "1rem",
    marginBottom: "1rem",
  },
});
