import React from 'react';
import { 
    StyleSheet,
    Text, 
    View 
} from 'react-native';
import List from './components/List'
import Slide from './components/Slider'

class App extends React.Component {
  render() {
    return (
      <View style={[{flex: 1}, styles.container]}>
        <Slide />
        <List />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      backgroundColor: 'black'
    }
  })
}

export default App