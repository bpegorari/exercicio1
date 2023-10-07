import { Text, SafeAreaView, StyleSheet,TouchableOpacity,Linking, Image } from 'react-native';


import { Card } from 'react-native-paper';


export default function App() {

  const githubLink = 'https://github.com/bpegorari';
  const handleGithubLinkPress = () => {
  Linking.openURL(githubLink);
  }
  return (

        <SafeAreaView style={styles.container}>
      <Card>
      <Image
          style={{width: '100%', height: '100%'}}
          source={{uri:'https://cdn-icons-png.flaticon.com/128/147/147144.png'}}
      /> 
      </Card>
      
      <Text style={styles.paragraph}>
        Dados Pessoais: 
          {'\n'}Bruno Loss Pegorari
      </Text>
      
      <Text style={styles.paragraph}>
        Formação: 
         {'\n'} Analista de sistemas FATEC PG 
      </Text>
      
      <Text style={styles.paragraph}>
        Experiencia:
          {'\n'}Engenheiro de Soluções - Twilio
      </Text>

      <Text style={styles.paragraph}>
        Projetos:
          {'\n'}
        <TouchableOpacity onPress={handleGithubLinkPress}>
        <Text style={styles.linkText}>
        Link (GitHub)
        </Text>
      </TouchableOpacity>
      </Text>
      
          </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#db9595',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#FFF',
  },
  linkText: {
    fontFamily: 'Verdana',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    textDecorationLine: 'underline', // Sublinhado para indicar um link
    color: 'blue', // Cor do link
    marginVertical: 10,
  },
});