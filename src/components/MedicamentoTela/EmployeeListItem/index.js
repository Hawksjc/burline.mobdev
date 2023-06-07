import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";

export function EmployeeListItem(props) {

  const [favoritar, setfavoritar] = useState(false)

  const favoritado = () => {
    setfavoritar(!favoritar);

  }

  return (
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
        <View style={styles.row}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.role}>{props.role}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={favoritado}>
        {favoritar ? (
        <Ionicons name="star" size={30} color="yellow"></Ionicons>
        ) : (
        <Ionicons name="star-outline" size={30} color="yellow"></Ionicons>
        )}
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ff3e89",
    alignItems: "center",
  },
  info: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagem: {
    borderRadius: 50,
    backgroundColor: "white",
    height: 100,
    width: 100,
    marginRight: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 3,
    color: "#ff914d",
  },
  role: {
    fontSize: 13,
    color: "#ff914d",
  },
});
