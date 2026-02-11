import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { style } from "../styles";
import { themas } from "../../../constants/themes";
import { useRouter } from "expo-router";

export default function Profile() {
    const [userName, setUserName] = useState<string>("");
    const [userImage, setUserImage] = useState<string | null>(null);
    const router = useRouter();

    // Função para simular a busca do nome no banco de dados ou estado global
    async function fetchUserData() {
        // Aqui você pode implementar a lógica para buscar os dados do usuário de um API ou estado global.
        // Exemplo de simulação:
        setTimeout(() => {
            setUserName(""); // Substitua pela resposta da API
        }, 1000);
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    // Função para selecionar uma imagem
    async function handleSelectImage() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            return Alert.alert("Permissão necessária", "Precisamos de permissão para acessar suas fotos.");
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled && result.assets) {
            setUserImage(result.assets[0].uri);
        }
    }

    return (
        <View style={style.container}>
            <View style={style.profileHeader}>
                <TouchableOpacity onPress={handleSelectImage}>
                    {userImage ? (
                        <Image source={{ uri: userImage }} style={style.profileImage} />
                    ) : (
                        <View style={style.profilePlaceholder}>
                            <MaterialIcons name="person" size={80} color={themas.light.colors.primary} />
                        </View>
                    )}
                </TouchableOpacity>
                <TextInput
                    style={style.userNameInput}
                    value={userName}
                    onChangeText={setUserName}
                    placeholder="Digite seu Nome"
                />
            </View>

            <View style={style.profileContent}>
                <Text style={style.infoText}>Bem-vindo(a), {userName}!</Text>
            </View>

            {/* Logo abaixo do texto de saudação */}
            <View style={style.logoContainer}>
                <Image
                    source={require("../../../assets/images/logo.png")} // Caminho para a sua logo
                    style={style.logo}
                />
            </View>

            {/* Botão de texto para navegação ao cadastro */}
            <TouchableOpacity
                onPress={() => router.push("./cadastro")} // Alterar para a navegação correta
                style={style.registerButtonContainer}
            >
                <Text style={style.registerButtonText}>
                    Não tem conta? Cadastre-se aqui!
                </Text>
            </TouchableOpacity>
        </View>
    );
}
