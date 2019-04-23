import React, {Component } from 'react'
import { StyleSheet } from 'react-native'
import Episodes from './Episodes'
import Trailers from './Trailers'
import {TabView, TabBar} from 'react-native-tab-view';


export default class TabsEpisodes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'Episodes'},
        { key: '2', title: 'Trailers & More' },
      ],
    };

    this._renderScene = this._renderScene.bind(this);
    this._handleIndexChange = this._handleIndexChange.bind(this);
  }

  _handleIndexChange = index => this.setState({ index });
  _renderScene({route}){
      switch(route.key){
        case '1':
          return <Episodes episodes={this.props.data}/>
        case '2':
          return <Trailers/>
        default:
          return null
      }
  }

  render() {
    return (

      <TabView
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        renderTabBar={props => (
          <TabBar
            {...props}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


