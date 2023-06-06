import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Cabecalho } from "./src/components/Cabecalho";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { PrincipalScreen } from './src/components/PrincipalTela/PrincipalScreen'
import { Cadastro } from "./src/components/CadastroTela/Cadastro";
import { Medicamento } from "./src/components/MedicamentoTela/Medicamento";
import { Favorito } from "./src/components/FavoritoTela/Favorito";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false, gestureEnabled: true }}
        />
        <Stack.Screen
          name="Principal"
          component={PrincipalScreen}
          options={{ headerShown: false, gestureEnabled: true }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false, gestureEnabled: true }}
        />
        <Stack.Screen
          name="Medicamento"
          component={Medicamento}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Favorito"
          component={Favorito}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}> Faça seu Login </Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.loginInput}
            placeholder="Nome de usuário"
            placeholderTextColor="#777"
          />

          <TextInput
            style={styles.loginInput}
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor="#777"
          />

          <View style={styles.loginButtonText}>
            <TouchableOpacity onPress={() => navigation.navigate("Principal")}>
              <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
              <Text>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d7e8d5",
  },
  loginContainer: {
    backgroundColor: "#eb9a7f",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 230,
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
    width: 180,
  },
});
