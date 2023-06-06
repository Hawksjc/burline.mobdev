// Maria Clara-01565971 e Júlio César de Oliveira Lima-0156654//
import React, { useState } from "react";
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
import { Cabecalho } from "../Cabecalho";
import { Rodape } from "../Rodape"

export function PrincipalScreen({ navigation }) {
  const [data, setData] = useState([
    {
      key: "1",
      image: require("../../../assets/medi.png"),
      text: "Medicamentos",
    },
    {
      key: "2",
      image: require("../../../assets/farmacia.png"),
      text: "Farmácia",
    },
    {
      key: "3",
      image: require("../../../assets/estrela.png"),
      text: "Favoritos",
    },
  ]);

  const Clicavel = (itemKey) => {
    if (itemKey === "1") {
      navigation.navigate("Medicamento");
    } else if (itemKey === "2") {
      Alert.alert("Olá!");
    } else if (itemKey === "3") {
      Alert.alert("Olá!");
    }
  };

  return (
    <View style={styles.container}>
      <Cabecalho/>
      <View style={styles.content}>
        <FlatList
          numColumns={2}
          data={data}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <View style={styles.figura}>
                <TouchableOpacity onPress={() => Clicavel(item.key)}>
                  <Image style={styles.image} source={item.image} />
                  <Text style={styles.texto}>{item.text}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
      <Rodape navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d7e8d5",
  },
  content: {
    flex: 1,
    backgroundColor: "#d7e8d5",
  },
  flatListContainer: {
    justifyContent: "space-between",
  },
  box: {
    display: "flex",
    padding: 5,
    alignItems: "center",
    width: "50%",
  },
  image: {
    padding: 10,
    width: 110,
    height: 110,
  },
  texto: {
    fontSize: 15,
    fontWeight: "700",
  },
  figura: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
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
  loginContainer: {
    backgroundColor: "#eb9a7f",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  loginTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  loginInput: {
    height: 40,
    width: 250,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#777",
    fontSize: 16,
  },

  loginButtonText: {
    height: 60,
    width: 60,
  },
});
