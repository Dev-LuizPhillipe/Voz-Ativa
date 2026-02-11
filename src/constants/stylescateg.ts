import { COLORS } from "@/constants/Colors";
import { Pressable, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //Styles das cagetorias
  background:{
    backgroundColor: COLORS.background,
    flex: 1
  },
  list:{
    alignSelf: "center",
    padding: 10,
  },
//Abaixo styles das categorias/home
  back:{
    flex: 1,
    width:  '100%',
    backgroundColor: COLORS.background,
    position: "static",
  },
  container:{
    height: '100%',
    gap: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin:10,       
  },
    subtitle:{
    width: '100%',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'BLACK',
    textAlign: 'center',
    paddingVertical: 15,
    textAlignVertical: 'bottom',
  },
})
