import { Image, Pressable, Text, View } from "react-native";
import { styleshome } from "./pressablehome.styles";
import { COLORS } from "@/constants/Colors";
import {  useRouter } from "expo-router";

type categoriasProps = {
    id: number;
    descricao: string;
    imagem: any;
    audio?: any;
    tema: string;
    route: any;
  }


export function CategHome( {item} : {item : categoriasProps}){

    const backgroundColor = item.tema === "boy" ? COLORS.backgroundboy : COLORS.backgroundgirl
    const router = useRouter();



    return(
        <Pressable style={[styleshome.pressable, {backgroundColor}]} onPress={() => router.push(item.route)}>
        <Text style={styleshome.titleimg}>{item.descricao}</Text>
        <Image
            source={item.imagem}
            style={styleshome.image}
        ></Image>
        </Pressable>
    )
}