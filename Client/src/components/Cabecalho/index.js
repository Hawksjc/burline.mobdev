import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function Cabecalho(){
    return(
        <View style={styles.head}>
            <Image source={require("../../../images/logo.png")} style={styles.logo}  resizeMode="contain"/>
            <AntDesign name="infocirlceo" style={styles.icon} size={30} color="black"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        fontSize: 30
    },
    logo: {
        width: 220,
        height: 100,
      },
      icon: {
        marginHorizontal: 8,
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
});