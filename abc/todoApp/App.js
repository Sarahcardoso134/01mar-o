import { component } from 'react'; 
 import { View, Text, StyleSheet } from 'react-native';
//export default function Header(props) {
  //return (
    //<View style={styles.header}>
      //<Text style= {{ color: 'white', fontSize:20}}
      //</View>
    //);
//}};

export default class Header extends Component {
  render() {
    return (
      <view style={styles.header}>
        <Text style={{color: 'white', fontsize:  20}}>
          {this.props.titulo}
        </Text>
      </view>
          )
  }
}
  const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4'];
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top:200
    ,
  }
})  
