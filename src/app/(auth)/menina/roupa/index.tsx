import React from "react";
import { PressableCateg } from "../../../../components/pressable/index";
import { roupas } from "../../../../db/dbgirl";
import { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList, SafeAreaView } from "react-native";
import { styles } from "../../../../constants/stylescateg";
import { Header } from "../../../../components/header";

type roupasProps = {
  id: number;
  descricao: string;
  imagem: any;
  audio: any;
  tema: string;
}
export default function Emocoes() {
  const [roupasprops, setRoupas] = useState<roupasProps[]>([])

  useEffect(() => {
    setRoupas(roupas);
  }, []);
  
  
  return (
    <>
    <SafeAreaView style={styles.background}> 
    <Header title="ROUPAS" icon="chevrons-left" tema="girl"/>
      <FlatList  data={roupas}
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