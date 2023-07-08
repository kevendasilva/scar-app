/* eslint-disable prettier/prettier */
import { Text, View, StyleSheet, Image } from 'react-native';
import { DefaultButton } from './components/inputComponents';
import Logo from './assets/Logo.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.flexColumn}>
        <View style={[{ justifyContent: 'center', alignItems: 'center' }]}>
          <Image source={Logo} alt="Logo" />
        </View>
        <Text style={styles.defaultText}>
          Bem-vindo(a) ao nosso aplicativo de controle de acesso eletrônico!
          Aproveite todas as funcionalidades com segurança e comodidade.
        </Text>
        <View style={[{ flexDirection: 'column', gap: 12.9 }]}>
          <DefaultButton title="Entrar" />
          <DefaultButton title="Cadastre-se" />
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
});
