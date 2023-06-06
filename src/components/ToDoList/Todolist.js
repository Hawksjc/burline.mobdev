import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

export function ToDoList({ props, funcao }) {
    return (
        <TouchableOpacity onPress={() => funcao(props.key)}>
            <Text style={styles.texto}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    texto:{
        color: 'blue'
    }
})