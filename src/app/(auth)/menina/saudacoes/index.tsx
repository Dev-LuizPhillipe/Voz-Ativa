
import React from "react";
import { PressableCateg } from "../../../../components/pressable/index";
import { rotina, saudacoes } from "../../../../db/dbgirl";
import { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList, SafeAreaView } from "react-native";
import { styles } from "../../../../constants/stylescateg";
import { Header } from "../../../../components/header";

type saudacoesProps = {
  id: number;
  descricao: string;
  imagem: any;
  audio: any;
  tema: string;
}
export default function Saudacoes() {
  const [saudacoesprops, setSaudacoes] = useState<saudacoesProps[]>([])

  useEffect(() => {
    setSaudacoes(saudacoes);
  }, []);
  
  
  return (
    <>
    <SafeAreaView style={styles.background}> 
      <Header title="SAUDAÇÕES" icon="chevrons-left" tema="girl"/>
      <FlatList  data={saudacoes}
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
   
