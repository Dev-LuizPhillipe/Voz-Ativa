import { COLORS } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center", // Alinha o título e o ícone na vertical
        justifyContent: "flex-start",
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        padding: 15,



    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: "26%",
    },
})