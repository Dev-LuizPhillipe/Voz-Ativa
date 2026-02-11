import { Text, View } from "react-native";
import { styles } from "./header.styles";
import { Feather } from "@expo/vector-icons"
import { router } from "expo-router";
import { COLORS } from "@/constants/Colors";

type headerprops = {
    title: string;
    icon? : any;
    onPress? : any;
    tema: string;
}

export function Header({title, icon, onPress, tema, ...reset} : headerprops ){
    const backgroundColor = tema === "boy" ? COLORS.backgroundboy : COLORS.backgroundgirl
    
    return(
        <View {...reset} style={[styles.container, {backgroundColor}]}>
            <Feather name={icon} size={45} color="black" onPress={() => router.back() }/>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}