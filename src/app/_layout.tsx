import { useEffect } from "react";
import { ClerkProvider, useAuth} from "@clerk/clerk-expo";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import * as SecureStore from "expo-secure-store";

const publishkey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

const tokenCache = {
    async getToken(key: string) {
        try{
            return SecureStore.getItemAsync(key);
        }catch(error){
            return null;
        }
    },
    async saveToken(key: string, value: string){
        try{
            return SecureStore.setItemAsync(key, value);
        }catch(error){
            return;
        }
    }
}


const InitialLayout = () => {

    const { isLoaded, isSignedIn} = useAuth();
    const segments = useSegments();
    const router = useRouter();
    
    useEffect(() => {
        if(!isLoaded) return;

        console.log("user", isSignedIn)
        const inAuthGroup = segments[0] === "(auth)"
//if para verificar se usuario tem login
        if (isSignedIn && !inAuthGroup){
            router.replace("/genero")
        }else if(!isSignedIn){
            router.replace("/login")
        }
    },[isSignedIn])
    
    
    return <Slot/>
}
export default function Layout(){
    return(
        <ClerkProvider publishableKey={publishkey} tokenCache={tokenCache}>
            <InitialLayout/>
        </ClerkProvider>
        
    )
}
