import React from "react";
import { PressableCateg } from "../../../../components/pressable/index";
import { emocoes } from "../../../../db/db";
import { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList, SafeAreaView } from "react-native";
import { styles } from "../../../../constants/stylescateg";
import { Header } from "../../../../components/header";

type emocoesProps = {
  id: number;
  descricao: string;
  imagem: any;
  audio: any;
  tema: string;
}
export default function Emocoes() {
  const [emocoesprops, setEmocoes] = useState<emocoesProps[]>([])

  useEffect(() => {
    setEmocoes(emocoes);
  }, []);
  
  
  return (
    <>
    <SafeAreaView style={styles.background}> 
    <Header title="EMOÇÕES" icon="chevrons-left" tema="boy"/>
      <FlatList  data={emocoes}
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