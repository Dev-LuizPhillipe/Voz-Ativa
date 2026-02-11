
import React from "react";
import { PressableCateg } from "../../../../components/pressable/index";
import { rotina, saudacoes } from "../../../../db/dbgirl";
import { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList, SafeAreaView } from "react-native";
import { styles } from "../../../../constants/stylescateg";
import { Header } from "../../../../components/header";

type rotinaProps = {
  id: number;
  descricao: string;
  imagem: any;
  audio: any;
  tema: string;
}
export default function Rotina() {
  const [rotinaprops, setRotina] = useState<rotinaProps[]>([])

  useEffect(() => {
    setRotina(rotina);
  }, []);
  
  
  return (
    <>
    <SafeAreaView style={styles.background}> 
      <Header title="ROTINA" icon="chevrons-left" tema="girl"/>
      <FlatList  data={rotina}
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