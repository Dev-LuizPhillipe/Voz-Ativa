import React from "react";
import { PressableCateg } from "../../../../components/pressable/index";
import { comida, rotina, saudacoes } from "../../../../db/db";
import { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList, SafeAreaView } from "react-native";
import { styles } from "../../../../constants/stylescateg";
import { Header } from "../../../../components/header";

type comidaProps = {
  id: number;
  descricao: string;
  imagem: any;
  audio: any;
  tema: string;
}
export default function Comida() {
  const [comidaprops, setComida] = useState<comidaProps[]>([])

  useEffect(() => {
    setComida(comida);
  }, []);
  
  
  return (
    <>
    <SafeAreaView style={styles.background}> 
      <Header title="COMIDA" icon="chevrons-left" tema="boy"/>
      <FlatList  data={comida}
                renderItem={ ({ item }) => <PressableCateg item={item}/> }
                keyExtractor={ ( item ) => item.id.toString() }
                horizontal={false}
                style={styles.list}
                showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
    </>
    )
}