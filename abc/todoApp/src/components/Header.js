import { StyleSheet, Text, View } from 'react-native';
export default function App() {

    return (
        <View style={styles.header}>
        <Text style={{color:"red", fontSize:25}}>
          Minha lista de tarefas
          </Text>
        </View>
    );
}       

const styles = StyleSheet.create( {
    header: {
    backgroundColor: 'pink',
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
    });