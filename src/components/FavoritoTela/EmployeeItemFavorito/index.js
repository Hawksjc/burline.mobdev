import { StyleSheet, FlatList, Image, View } from "react-native";
import { ToDoList } from '../../ToDoList/Todolist'

export function EmployeeListFavorito(props) {
  return (
    <View>
      <FlatList
        data={props.data1}
        renderItem={({ item }) => (
          <ToDoList
            name={item.name}
            role={item.role}
            image={item.image}
            props={item}
            funcao={FavoritarItem}
          />
        )}
        keyExtractor={(item) => item.key}
        style={styles.container}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
