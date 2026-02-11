import { StyleSheet } from "react-native";
import { themas } from "../../constants/themes"; 

export const style = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center", 
        // justifyContent: "center",
        backgroundColor: themas.light.colors.bgScreen,
    },
    profileHeader: {
        alignItems: "center",
        marginBottom: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: themas.light.colors.primary,
    },
    profilePlaceholder: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: themas.light.colors.gray,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: themas.light.colors.primary,
    },
    userNameInput: {
        marginTop: 10,
        fontSize: 20,
        textAlign: "center",
        borderBottomWidth: 1,
        borderColor: themas.light.colors.primary,
        padding: 5,
        width: 200,
        color: themas.light.colors.dark,
    },
    profileContent: {
        marginTop: 20,
        alignItems: "center",
    },
    infoText: {
        fontSize: 18,
        color: themas.light.colors.dark,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: themas.light.colors.primary,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    buttonText: {
        color: themas.light.colors.bgScreen,
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerButtonContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    registerButtonText: {
        fontSize: 16,
        color: themas.light.colors.primary,
        textDecorationLine: "underline",
        fontWeight: "bold",
    },
    boxTop: {
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    Titulo: {
        fontSize: 24,
        fontWeight: "bold",
        color: themas.light.colors.primary,
    },
    titleInput: {
        fontSize: 16,
        color: themas.light.colors.dark,
    },
    BoxInput: {
        flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff", // Fundo branco
    padding: 12, // Aumentando o padding para maior conforto
    marginBottom: 20, // Menor distância entre os inputs
    borderRadius: 10, // Bordas mais arredondadas
    borderWidth: 1,
    borderColor: '#ccc', // Cor da borda mais suave
    width: '90%', // Tornando o campo mais largo
    },
    Input: {
        flex: 1,
        fontSize: 16,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#f0f0f0",
    },
    boxBottom: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    TextButton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    textBottom: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
    },
    
});

