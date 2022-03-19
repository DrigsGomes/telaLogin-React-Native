import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function SingIn() {
 return (
   <View style={styles.container}>

     <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
       <Text style={styles.message}> Bem-vindo(a)</Text>
     </Animatable.View>

     <Animatable.View animation="fadeInUp" style={styles.containerForm}>
       <Text style={styles.title}> Email</Text>

       <TextInput 
       placeholder="Digite um email..."
       style={styles.input}
       />

      <TextInput 
       placeholder="Sua senha"
       style={styles.input}
       />

       <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}>Acessar</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.buttonRegister}>
         <Text style={styles.registerTex}>Não tem uma conta? Cadastre-se</Text>
       </TouchableOpacity>
       
     </Animatable.View>

     

     



   </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#38A69D'
  },
  containerHeader:{
    marginTop:'14%',
    marginBottom: '8%',
    paddingStart:'5%'
  },
  message:{
    fontSize:28,
    fontWeight:'bold',
    color:'#FFF'

  },
  containerForm:{
    backgroundColor:'#FFF',
    flex:1, 
    borderTopLeftRadius: 25,
    borderTopRightRadius:25
  }
})