import React, {Component } from 'react'
import { View , StyleSheet , Dimensions, Text} from 'react-native'
import Episodes from './Episodes'
import Trailers from './Trailers'
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

const {width,height} = Dimensions.get('window')

export default class TabsEpisodes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: 'active', title: 'Episodes'},
        { key: 'inactive', title: 'Trailers & More' },
      ],
    };

    this.renderScene = this.renderScene.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange(index) {
    this.setState({ index });
  }

  renderScene({ route }) {
    if (!route.key) return null;

    if (route.key === 'active') {
      return <Episodes type="active" episodes={this.props.data}/>;
    }

    if (route.key === 'inactive') {
      return <Trailers type="inactive" />;
    }
  }

  renderLabel({ route }, props) {
    const { index } = this.state;
    const selected = route.key === props.navigationState.routes[index].key;

    return (
      <View>
        <Text>
          {route.title.toUpperCase()}
        </Text>
      </View>
    );
  }

  renderTab() {
    return (
      <TabView
        navigationState={this.state}
        onIndexChange={this.onTabChange}
        renderScene={this.renderScene}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={e => this.renderLabel(e, props)}
          />
        )}
      />
    );
  }

  render() {
    return (
      <View style={styles.containerTabs}>
        {this.renderTab()}
      </View>
    );
  }

}


const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  containerTabs:{
    color:'#fff',
    borderTopWidth:2,
    borderColor:'#fff'
  }
});


