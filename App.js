import React, { useState } from "react";
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
  const [data, setData] = useState([
    {
      key: "1",
      image: require("./assets/medi.png"),
      text: "Medicamentos",
    },
    {
      key: "2",
      image: require("./assets/farmacia.png"),
      text: "Farmácia",
    },
    {
      key: "3",
      image: require("./assets/estrela.png"),
      text: "Favoritos",
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image style={styles.listaItemImagem} source={item.imagem} />
      <Text style={styles.listaItemTexto}>{item.texto}</Text>
    </View>
  );

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
          numColumns={2}
          data={data}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item, index }) => (
            <View style={styles.box}>
              <View style={styles.figura}>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.texto}>{item.text}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
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
  },
  logo: {
    width: 150,
    height: 80,
  },
  icon: {
    marginHorizontal: 8,
  },
  flatList: {
    flex: 1, 
  },
  flatListContainer: {
    justifyContent: 'space-between', 
  },
  box: {
    display: "flex",
    padding: 5,
    alignItems: "center",
    width: '50%',
    
  },
  image: {
    padding: 10,
    width: 100,
    height: 100,
  },
  texto: {
    fontSize: 15,
    fontWeight: "700",
  },
  figura: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30
  },
  design: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texto3: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    textAlign: "center",
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
