import { StyleSheet } from "react-native";

export const styleshome = StyleSheet.create({

    title: {
        width: '100%',
        height: 80,
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#5894f1',
        textAlignVertical: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    titleimg:{
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    pressable:{
        width: 180,
        height: 180,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    }
})