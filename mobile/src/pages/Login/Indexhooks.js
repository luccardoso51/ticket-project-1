import React, { useState, useCallback, useContext } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";

import styles from "./styles";

import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/Auth";

export default function Login() {
  const initialVal = { enrollment_number: "", password: "" };
  const [state, setState] = useState(initialVal);
  const {
    action: { login }
  } = useContext(AuthContext);

  const handleLogin = () => {
    login(state.enrollment_number, state.password);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <TextInput
        style={styles.input}
        placeholder="Matricula" //colocar icone!
        placeholderTextColor="#123" //MUDAR A COR PARA O AZUL CERTO
        value={state.enrollment_number}
        onChangeText={text => setState({ ...state, enrollment_number: text })}
        maxLength={12} //numero maximo do cod da matricula, verificar se o funcionarios tem mais numeros.
      />
      <TextInput
        style={styles.inputPassword}
        placeholder="Senha" //colocar icone!
        placeholderTextColor="#123" //MUDAR A COR PARA O AZUL CERTO
        secureTextEntry={true}
        value={state.password}
        autoCorrect={false}
        onChangeText={text => setState({ ...state, password: text })}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Logar-se</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => []}>
        <Text>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => []} style={styles.buttonCadastro}>
        <Text>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
