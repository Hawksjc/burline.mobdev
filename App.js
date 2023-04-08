import { StyleSheet, Text, View, FlatList, ScrollView, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {

  const data = [
    {
      key: "1",
      image: require("./images/box1.png"),
      text: "Caixa 1",
    },
    {
      key: "2",
      image: require("./images/box2.png"),
      text: "Caixa 2",
    },
    {
      key: "3",
      image: require("./images/box3.png"),
      text: "Caixa 3",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image source={require("./images/logoBurline.png")} style={styles.logo} resizeMode="contain" />
        <AntDesign name="infocirlceo" style={styles.icon} size={30} color="black" />
      </View>
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={2}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContainer}
        />
        <View style={styles.box}>
          <Image
            style={styles.image}
            source={require("./images/box4.png")}
          />
          <Text style={styles.text}>Caixa 4</Text>
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
    backgroundColor: "#D8F2FA",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    paddingBottom: 15
  },
  footerText: {
    color: "#999",
    marginLeft: 8,
    fontSize: 16,
  },
  logo: {
    width: 150,
    height: 80,
  },
  icon: {
    marginHorizontal: 8,
  },
});
