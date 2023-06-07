import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { ToDoList } from "./ToDoList/Todolist";

export function Favorito() {
  const [data1, setData1] = useState([
    {
      key: 1,
      name: "Abretia",
      role: "",
      image:
        "https://www.farmaciasespecializadas.com/ccstore/v1/images/?source=/file/v6398369037751509459/products/28938.png&height=475&width=475",
    },
    {
      key: 2,
      name: "Baclofen",
      role: "",
      image:
        "https://www.teutoonline.com.br/fotos/4141d8506e78b751e86d53b441b3c414.png",
    },
    {
      key: 3,
      name: "Cabergolina",
      role: "",
      image:
        "https://santaluciadrogaria.vtexassets.com/arquivos/ids/165455-800-1067?v=637638188672200000&width=800&height=1067&aspect=true",
    },
  ]);

  const DesfavoritarItem = (key) => {
    setData1((prevData1) => {
      return prevData1.filter((texto) => texto.key != key);
    });
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        data={data1}
        renderItem={({ item }) => (
          <ToDoList
            name={item.name}
            role={item.role}
            image={item.image}
            funcao={DesfavoritarItem}
          />
        )}
        keyExtractor={(item) => item.key.toString()}
        style={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
  },
  conteudo: {
    padding: 40,
  },
});
