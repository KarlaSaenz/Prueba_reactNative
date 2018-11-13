import React from 'react';
import { 
    StyleSheet,
    Text, 
    View 
} from 'react-native';
import SideMenu from 'react-native-side-menu'

import List from './components/List'
import Slide from './components/Slider'
import Header from './components/Header'
import Menu from './components/Menu'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen:false
    }
  }
  toggle(){
    this.setState({
      isOpen:!this.state.isOpen
    })
  }

  updateMenu(isOpen){
    this.setState({isOpen})
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <SideMenu 
        menu={<Menu/>}
        isOpen={this.state.isOpen}
        onChange={(isOpen)=> this.updateMenu(isOpen)}
        >
          <View style={[{flex: 1}, styles.container]}>
            <Header toggle={this.toggle.bind(this)}/>
            <Slide />
            <List />
          </View>
        </SideMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black'
  }
})

export default App