import { Text, View, StyleSheet, Image } from 'react-native';
import { DefaultButton, TextInputLogin } from '../components/inputComponents';
import SignInImage from '../assets/SignIn.png';

export function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={[styles.flexColumn, { columnGap: 24 }]}>
        <View style={[{ justifyContent: 'center', alignItems: 'center' }]}>
          <Image source={SignInImage} alt="SignIn" />
        </View>
        <Text style={styles.defaultTitle}>
          Faça o login para acessar sua conta.
        </Text>
        <View>
          <TextInputLogin placeholder="E-mail" />
          <TextInputLogin placeholder="Senha" />
          <DefaultButton
            title="Entrar"
            onPress={() => navigation.navigate('Index')}
          />
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 36,
    justifyContent: 'center',
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
