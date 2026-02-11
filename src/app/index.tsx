import { View, Text, SafeAreaView, Pressable, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Header } from '@/components/header'
import { styles } from '@/constants/stylescateg'

export default function Genero(){
  return (
      <SafeAreaView style={styles.back}>
            <Link href={"/(auth)/homeboy"}>clica</Link>
            <Link href={"/(auth)/homegirl"}>clica</Link>
            <Link href={"/(auth)/genero"}>clica aqui</Link>
            <Link href={"../(public)/cadastro"}>cadastro</Link>
            <Link href={"../(public)/login"}>login</Link>
        </SafeAreaView>
          )
}