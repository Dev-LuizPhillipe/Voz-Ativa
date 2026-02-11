import React from "react";
import { useEffect, useState} from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { styles } from "../../../constants/stylescateg";
import { useRouter } from "expo-router";
import { Header } from "../../../components/header";
import { categorias } from "../../../db/db";
import { CategHome } from "@/components/categorias";
	
type categoriaProps = {
  id: number;
  descricao: string;
  imagem: any;
  tema: string;
  route: any;
  onPress: any;
}
export default function CategMan() {
  const router = useRouter();
  const [categoriasprops, setCategorias] = useState<categoriaProps[]> ([])

  useEffect(() => {
    setCategorias(categoriasprops);
  }, []);

  return (
    <SafeAreaView style={styles.back}>
      <Header title="VOZ ATIVA" tema="boy" />
      <View style={styles.container}>
        <Text style={styles.subtitle}>DIA A DIA</Text>
          {categorias.map((categorias) =>
          <CategHome key={categorias.id} item={categorias}/>
          )}
      </View>
    </SafeAreaView>
  );
}
