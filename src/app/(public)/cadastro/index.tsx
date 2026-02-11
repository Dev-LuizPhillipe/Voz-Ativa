import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator, SafeAreaView } from 'react-native';
import { style } from "../styles";
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../../constants/themes";
import { useRouter } from "expo-router";
import { Header } from "@/components/header";
import { useSignUp } from "@clerk/clerk-expo";

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};


export default function Register() {
    const router = useRouter();

    const { isLoaded, setActive, signUp} = useSignUp();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    // Validação de email
    function isValidEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Função para checar se as senhas são iguais
    function isValidPassword(password: string, confirmPassword: string): boolean {
        return password === confirmPassword;
    }

    async function handleSingUp() {
        if(!isLoaded) return
        
        try {
            if (!email || !password || !confirmPassword) {
                return Alert.alert('Atenção', 'Informe todos os campos obrigatórios!');
            }

            if (!isValidEmail(email)) {
                return Alert.alert('Atenção', 'Por favor, insira um e-mail válido!');
            }

            if (!isValidPassword(password, confirmPassword)) {
                return Alert.alert('Atenção', 'As senhas não coincidem!');
            }
            await signUp.create({
                emailAddress: email,
                password: password,               
            })
            await setActive({session: signUp.createdSessionId})
        } catch (error) {
            console.log(error);
        }
    }

    const isFormValid = email && password && confirmPassword && isValidPassword(password, confirmPassword);

    return (
        <SafeAreaView style={style.container}>
            <Header title="Cadastro" tema="boy" icon="chevrons-left"/>
            <View style={style.boxTop}>
                <Image
                    source={require('../../../assets/images/logo.png')}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.Titulo}>Voz Ativa</Text>

                <Text style={style.titleInput}>Endereço de e-mail</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={[style.Input, { width: '90%', paddingHorizontal: 20 }]}  // Aumentamos a largura e o padding
                        placeholder="Digite seu e-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons
                        name="email"
                        size={40}
                        color={themas.light.colors.dark}
                    />
                </View>

                <Text style={style.titleInput}>Senha</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={[style.Input, { width: '90%', paddingHorizontal: 20 }]}  // Aumentamos a largura e o padding
                        placeholder="Digite sua senha"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons
                        name={showPassword ? "visibility" : "visibility-off"}
                        size={40}
                        color={themas.light.colors.dark}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                </View>

                <Text style={style.titleInput}>Confirmar senha</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={[style.Input, { width: '90%', paddingHorizontal: 20 }]}  // Aumentamos a largura e o padding
                        placeholder="Confirme sua senha"
                        secureTextEntry={!showConfirmPassword}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <MaterialIcons
                        name={showConfirmPassword ? "visibility" : "visibility-off"}
                        size={40}
                        color={themas.light.colors.dark}
                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity 
                
                    style={[style.button, { opacity: isFormValid ? 1 : 0.5 }]} 
                    onPress={handleSingUp}
                >
                    {isLoaded ? (
                        <ActivityIndicator color="#FFF" size="small" />
                    ) : (
                        <Text style={style.TextButton}>CRIAR CONTA</Text>
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


