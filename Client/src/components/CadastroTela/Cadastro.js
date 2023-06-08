import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
} from "react-native";

export function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.img}>
          <Image
            source={require("../../../assets/tela.jpg")}
            style={styles.tela}
          />
        </View>
<View style={styles.container2}>
        <View style={styles.titulo}>
          <Text style={styles.titu}> BURLINE</Text>
        </View>

        <View style={styles.login}>
          <Text>Digite seu nome completo:</Text>
          <TextInput
            multiline
            style={styles.nome}
            placeholder="Ex:Julio Cesar"
          />
          <Text> </Text>

          <Text>Digite seu e-mail:</Text>
          <TextInput
            multiline
            style={styles.nome}
            placeholder="Ex:juliocesar@gmail.com"
          />
          <Text> </Text>
          <Text>Digite uma senha: </Text>
          <TextInput
            keyboardType="numeric"
            style={styles.nome}
            placeholder="Ex:123456"
          />
        </View>

        <Text> </Text>
        <Text> </Text>
        <View>
          <Button
            style={styles.button}
            title="CRIE SUA CONTA"
            onPress={() => navigation.navigate("Login")}
            color={"#ff914d"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    marginTop: 20
  },
  img: {
    justifyContent: "center",
    alignSelf: "center",
    paddingEnd: 200,
    flexDirection: "column",
  },
  tela: {
    height: 200,
    width: 800,
  },
  titulo: {
    alignItems: "center",
  },
  titu: {
    fontSize: 40,
    color: "#ff914d",
    fontWeight: "bold",
  },
  login: {
    alignItems: "center",
    justifyContent: "center",
  },
  nome: {
    borderWidth: 2.5,
    borderColor: "#ff914d",
    padding: 8,
    margin: 10,
    width: 340,
    borderRadius: 15,
  },
  button: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
});
