import React, {Component } from 'react'
import { View , StyleSheet , Dimensions} from 'react-native'
import Episodes from './Episodes'
import Trailers from './Trailers'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
        <Episodes  style={styles.scene}
            // seasons={this.props.seasons}
            // getSeason={this.props.getSeason}
            // navigation={this.props.navigation} 
            // currentSeason={this.props.currentSeason}
            episodes={this.props.data} 
        />
);
const SecondRoute = () => (
    <Trailers style={styles.scene} />
);

export default class TabsEpisodes extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Episodes' },
      { key: 'second', title: 'Trailers & More' },
    ],
  };

  render() {
    console.log(this.props)
    return (
      <TabView
        style={styles.containerTabs}
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height:0 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  containerTabs:{
    borderTopWidth:2,
    borderColor:'#000'
  }
});


