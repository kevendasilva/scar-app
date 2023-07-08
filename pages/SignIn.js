import { Text, View, StyleSheet, Image } from 'react-native';
import { DefaultButton } from './../components/inputComponents';
import SignInImage from './../assets/SignIn.png';

export function SignIn() {
  return (
    <View style={styles.container}>
      <View style={[styles.flexColumn, { columnGap: 24 }]}>
        <View style={[{ justifyContent: 'center', alignItems: 'center' }]}>
          <Image source={SignInImage} alt="SignIn" />
        </View>
        <Text style={styles.defaultTitle}>
          Faça o login para acessar sua conta.
        </Text>
        <DefaultButton title="Entrar" />
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
