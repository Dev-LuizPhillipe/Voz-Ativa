import { COLORS } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        padding: 30,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    titleimg:{
        fontSize:30,
        fontWeight: "900",
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'black',
    },
    image: {
        width: 170,
        height: 170,
        resizeMode: 'contain',
        margin: 10,
      },
    pressable:{
        width: 280,
        height: 280,
        borderRadius: 15,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 100, height: 200 },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
})