import React from "react";
import { useEffect, useState} from "react";
import { View, Text, Image, Pressable, SafeAreaView, FlatList } from "react-native";
import { styles } from "../../../constants/stylescateg";
import { useRouter } from "expo-router";
import { Header } from "../../../components/header";
import { categorias } from "../../../db/dbgirl";
import { CategHome } from "@/components/categorias";
	
type categoriaProps = {
  id: number;
  descricao: string;
  imagem: any;
  tema: string;
  route: any;
  onPress: any;
}
export default function CategGirl() {
  const router = useRouter();
  const [categoriasprops, setCategorias] = useState<categoriaProps[]> ([])

  useEffect(() => {
    setCategorias(categoriasprops);
  }, []);

  return (
    <SafeAreaView style={styles.back}>
      <Header title="VOZ ATIVA" tema="girl" />
      <View style={styles.container}>
        <Text style={styles.subtitle}>DIA A DIA</Text>

        {categorias.map((categorias) =>
        <CategHome key={categorias.id} item={categorias}/>
        )}
        {/* <FlatList data={categorias}
                  renderItem={ ({ item }) => <CategHome item={item}/> }
                  keyExtractor={ ( item ) => item.id.toString() }
                  horizontal={false}
                  style={styles.list}
                  showsVerticalScrollIndicator={false}

        /> */}
      </View>
    </SafeAreaView>
  );
}
// const categorias = [
//   { ...saudacoes[1], onPress: () => router.push("/screens/saudacoes") },
//   { ...rotina[2], onPress: () => router.push("/screens/rotina") },
//   { ...emocoes[3], onPress: () => router.push("/screens/emocoes") },
//   { ...comida[4], onPress: () => router.push("/screens/comida") },
//   { ...roupas[5], onPress: () => router.push("/screens/roupa") },
// ];
// {categorias.map((categorias) =>
// <PressableCateg key={categorias.id} item={categorias}/>
// )}
