import { Stack } from "expo-router";
import React from "react";

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name="genero/index" options={{title: "VOZ ATIVA", headerShown: false}}/>
            <Stack.Screen name="homeboy/index" options={{title: "VOZ ATIVA", headerShown: false}}/>
            <Stack.Screen name="homegirl/index" options={{title: "VOZ ATIVA", headerShown: false}}/>
            <Stack.Screen name="menino/saudacoes/index" options={{title: "SAUDACOES", headerShown: false}}/>
            <Stack.Screen name="menino/rotina/index" options={{title: "ROTINA", headerShown: false}}/>
            <Stack.Screen name="menino/emocoes/index" options={{title: "EMOÇÕES", headerShown: false}}/>
            <Stack.Screen name="menino/comida/index" options={{title: "COMIDA", headerShown: false}}/>
            <Stack.Screen name="menino/roupa/index" options={{title: "ROUPAS", headerShown: false}}/>
            <Stack.Screen name="menina/saudacoes/index" options={{title: "SAUDACOES", headerShown: false}}/>
            <Stack.Screen name="menina/rotina/index" options={{title: "ROTINA", headerShown: false}}/>
            <Stack.Screen name="menina/emocoes/index" options={{title: "EMOÇÕES", headerShown: false}}/>
            <Stack.Screen name="menina/comida/index" options={{title: "COMIDA", headerShown: false}}/>
            <Stack.Screen name="menina/roupa/index" options={{title: "ROUPAS", headerShown: false}}/>
        </Stack>
        
    )
}