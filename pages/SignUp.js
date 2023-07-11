import { Text, View, StyleSheet, Image } from 'react-native';
import { DefaultButton, TextInputLogin } from './../components/inputComponents';


export function SignUp() {
  return (
    <View style={styles.container}>
      <View style={[styles.flexColumn, { columnGap: 24 }]}>
        <View style={[{ justifyContent: 'center', alignItems: 'center', }]}>

        </View>
        <Text style={styles.defaultTitle}>
          Faça o cadastro para criar a sua conta.
        </Text>
        <View>
          <TextInputLogin placeholder="Nome" />
          <TextInputLogin placeholder="E-mail" />
          <TextInputLogin placeholder="Senha" secureTextEntry={true} />
          <TextInputLogin placeholder="Confirme a senha" secureTextEntry={true} />
          <DefaultButton title="Cadastrar" />
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 75,
    paddingHorizontal: 36,
    marginVertical: 90,
  },
  defaultText: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: 'Lato_400Regular',
    textAlign: 'center',
    color: '#282C40',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
    gap: 36,
  },
  defaultTitle: {
    color: '#282C40',
    fontFamily: 'Lato_700Bold',
    fontSize: 20,
  },
});
