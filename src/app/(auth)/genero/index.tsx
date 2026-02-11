import { View, Text, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { COLORS } from '@/constants/Colors'
import { useRouter } from 'expo-router';

export default function GeneroHome() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.back}>
          <Text style={styles.title}>Qual seu Genero?</Text>
      <View style={styles.container}>
            <Pressable style={[styles.pressable, {backgroundColor: COLORS.backgroundboy}]}
                      onPress={() => router.replace('./homeboy')}>
                      <Text style= {styles.text}>MENINO</Text>
                      <Image source={require('../../../assets/images/Menino/Saudações/saudacoes.png')}
                      style={styles.image}
                      ></Image>
            </Pressable>
            <Pressable style={[styles.pressable, {backgroundColor: COLORS.backgroundgirl}]}
                      onPress={() => router.replace('./homegirl')}>
                      <Text style= {styles.text}>MENINA</Text>
                      <Image source={require('../../../assets/images/Menina/Saudações/saudacoes.png')}
                      style={styles.image}
                      ></Image>
            </Pressable>
      </View>
    </SafeAreaView>
  )
}