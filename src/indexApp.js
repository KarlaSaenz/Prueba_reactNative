import React, {Component} from 'react'
import App from './app'
import Search from './components/Search'
import Details from './components/Details'
import {
    createStackNavigator,
  } from 'react-navigation';

const IndexApp = createStackNavigator({
    Home:{screen:App},
    Search:{screen:Search},
    Details:{screen:Details}
},{
    initialRouteName: 'Home',
    headerMode: 'none'
})



export default IndexApp