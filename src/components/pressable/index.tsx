import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./pressable.styles";
import {  Audio} from "expo-av";
import { useState, useEffect} from "react";
import { COLORS } from "@/constants/Colors";

type categoriaProps = {
    id: number;
    descricao: string;
    imagem: any;
    audio: any;
    tema: string;
    onPress?: any;
  }


export function PressableCateg( {item} : {item : categoriaProps}){
    // const player = useAudioPlayer(item.audio);
    /*() => player.play()*/
    const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(item.audio);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  useEffect(() => {
    // Função de limpeza para descarregar o som
    return () => {
      if (sound) {
        console.log("Unloading Sound");
        sound.unloadAsync();
      }
    };
  }, [sound]);
  const backgroundColor = item.tema === "boy" ? COLORS.backgroundboy : COLORS.backgroundgirl


    return(
      <View style={styles.container}>
            <Pressable style={[styles.pressable, {backgroundColor}]} onPress={playSound}>
            <Text style={styles.titleimg}>{item.descricao}</Text>
            <Image
                source={item.imagem}
                style={styles.image}
                ></Image>
            </Pressable>
        </View>
    )
}