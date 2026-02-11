import { COLORS } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    back:{
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
    },
    title: {
        width: '100%',
        height: 80,
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'gray',
        textAlignVertical: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    pressable:{
        width: 280,
        height: 280,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
});
