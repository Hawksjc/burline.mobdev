import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const data = [
    {
      key: "1",
      image: require("./assets/medi.png"),
      text: "Caixa 1",
    },
    {
      key: "2",
      image: require("./assets/farmacia.png"),
      text: "Caixa 2",
    },
    {
      key: "3",
      image: require("./assets/estrela.png"),
      text: "Caixa 3",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          source={require("./images/logoBurline.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <AntDesign
          name="infocirlceo"
          style={styles.icon}
          size={30}
          color="black"
        />
      </View>

      <View style={styles.content}>
        <FlatList
          style={styles.flatList}
          numColumns={2}
          data={data}
          contentContainerStyle={styles.flatListContainer}
        />

        <View style={styles.box}>
          <View style={styles.design}>
            <View style={styles.figura}>
              <Image
                style={styles.image}
                source={require("./assets/estrela.png")}
              />
              <Text style={styles.texto}>SEUS FAVORITOS</Text>
            </View>
            <View style={styles.figura}>
              <Image
                style={styles.image}
                source={require("./assets/farmacia.png")}
              />
              <Text style={styles.texto}>MAIS PROCURADAS</Text>
            </View>
          </View>
          <View style={styles.figura}>
            <Image style={styles.image} source={require("./assets/medi.png")} />
            <Text style={styles.texto}>MEDICAMENTOS A-Z</Text>
          </View>
        </View>
        <View>
          <View style={styles.texto3}>
            <Text style={styles.texto3}>Faça seu login</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <AntDesign name="search1" size={24} color="black" />
        <Text style={styles.footerText}>Search</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8F2FA",
  },
  head: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 35,
    paddingBottom: 10,
  },
  content: {
    flex: 1,
    backgroundColor: "#d0ecea",
    padding: 16,
  },
  logo: {
    width: 150,
    height: 80,
  },
  icon: {
    marginHorizontal: 8,
  },
  box: {
    display: "flex",
    padding: 5,
    alignItems: "center",
  },
  image: {
    padding: 10,
    width: 90,
    height: 90,
    margin: 10,
  },
  texto: {
    fontSize: 15,
    fontWeight: "700",
  },

  figura: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  design: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    height: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    paddingBottom: 15,
  },
  footerText: {
    color: "#999",
    marginLeft: 8,
    fontSize: 16,
  },
});
