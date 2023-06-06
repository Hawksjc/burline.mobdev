import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export function ToDoList({ props, funcao }) {
  return (
    <View>
      <TouchableOpacity onPress={() => funcao(props.key)}>
        <View style={styles.container}>
          <View style={styles.imagem}>
            <Image
              style={{
                height: 70,
                width: 60,
                overflow: "hidden",
                borderRadius: 25,
              }}
              source={{ uri: props.image }}
            ></Image>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.role}>{props.role}</Text>
          </View>
          <Text style={styles.texto}>{props.texto}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: "blue",
  },
  container:{
   flexDirection:'row',
   padding: 10,
   borderBottomWidth: 1,
   borderBottomColor: "#ff3e89"
   },
   info: {
  justifyContent: 'center',
   },
   imagem:{
    borderRadius: 50,
    backgroundColor: 'white',
    height: 100,
    width: 100,
    marginRight: 2,
    alignItems: 'center',
    justifyContent:'center',
  },
  name: {
    fontSize: 15,
    fontWeight:'bold',
    marginBottom: 3,
    color: '#ff914d'
  },
  role:{
    fontSize: 13,
    color: '#ff914d'
  }
});
