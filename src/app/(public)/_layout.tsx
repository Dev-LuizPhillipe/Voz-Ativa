import { Stack } from "expo-router";

export default function PublicLayou(){
    return(
        <Stack>
            <Stack.Screen 
                name="cadastro/index"
                options={{title: "VOZ ATIVA", 
                headerShown: false
                }}/>
                <Stack.Screen 
                name="login/index"
                options={{title: "VOZ ATIVA", 
                headerShown: false
                }}/>
        </Stack>
    )
}