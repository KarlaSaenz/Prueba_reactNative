import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    TouchableHighlight,
    ScrollView,
    Dimensions,
    ImageBackground
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import TabsEpisodes from './TabsEpisodes'

const {width,height} = Dimensions.get('window')

class Details extends Component{
    render(){
        const {params} = this.props.navigation.state
        const {episodes} = params.item.details
        const {name} = params.item
        const {thumbnail, description,cast,season,creator,year,numOfEpisodes} = params.item.details
        return(
            <ScrollView style={styles.container}>
           
                    <ImageBackground
                        style={styles.thumbnail}
                        source={{uri: thumbnail }}
                    >
                        <View style={styles.buttonPlay}>
                            <TouchableWithoutFeedback>
                                <View>
                                    <Icon
                                        name="play-circle"
                                        size={90}
                                        color="white"
                                        style={styles.iconPlay}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </ImageBackground>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.subtitle}>
                            <Text style={[styles.text,styles.subTitleText]}>{ year }</Text>
                            <Text style={[styles.text,styles.subTitleText]}>{ numOfEpisodes }</Text>
                            <Text style={[styles.text,styles.subTitleText]}>{ season } Season</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={[styles.text,styles.light]}>{ description }.</Text>
                        </View>
                        <Text style={[styles.text]}>Cast: { cast }. </Text>
                        <View style={styles.shareListIcons}>
                            <View style={styles.myListIcon}>
                                <IonIcons
                                    style={styles.listIcon} 
                                    name="md-checkmark"
                                    color="grey"
                                    size={25}
                                />
                                <Text style={styles.text}>My List</Text>
                            </View>
                            <TouchableHighlight>
                                <View style={styles.myShareIcon}>
                                    <Icon 
                                        style={styles.shareIcon}
                                        name="share-alt"
                                        color="grey"
                                        size={25}
                                    />
                                    <Text style={styles.text}>Share</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View  style={styles.tabs}>
                        <TabsEpisodes 
                            navigation={this.props.navigation}
                            data={episodes}
                        />
                    </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    nameContainer: {
        backgroundColor: 'transparent'
    },
    header: {
        backgroundColor: '#181818',
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    closeButton: {
        position: 'absolute',
        top: 15,
        right: 10,
        zIndex: 2
    },
    headerText: {
        color: 'white',
        fontSize: 20
    },
    headerWithIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconDown: {
        marginLeft: 5
    },
    titleShow: {
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    thumbnail: {
        width: width,
        height: 300
    },
    buttonPlay: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    iconPlay: {
        opacity: 0.7,
        backgroundColor: 'transparent'
    },
    descriptionContainer: {
        paddingHorizontal: 20
    },
    subtitle: {
        flexDirection: 'row'
    },
    subTitleText: {
        marginRight: 20
    },
    text: {
        color: '#b3b3b3',
        fontSize: 16
    },
    shareListIcons: {
       flexDirection: 'row',
       marginVertical: 30 
    },
    listIcon: {
        height: 25
    },
    shareIcon: {
        height: 25
    },
    myListIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
    },
    myShareIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        marginVertical: 10
    },
    light: {
        fontWeight: '200'
    },
    tabs:{
        height:height
    }
})

export default Details