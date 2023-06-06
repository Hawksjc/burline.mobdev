import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function Rodape({ navigation }) {
  return (
    <View style={styles.footer}>
      <AntDesign name="search1" size={24} color="black" />
      <TouchableOpacity onPress={() => navigation.navigate("Medicamento")}>
        <Text style={styles.footerText}>Pesquisar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  footer: {
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    paddingBottom: 15,
  },
  footerText: {
    marginLeft: 25,
    justifyContent: "center",
  },
});
