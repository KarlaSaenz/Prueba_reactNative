import React, {Component} from 'react'
import {View,Text, StyleSheet, TouchableWithoutFeedback, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
// import styles from 'react-native-side-menu/build/styles';

class Episodes extends Component{
    
    renderEpisodes(){
        const res = this.props.episodes.map((item, i) => {
            const img = item.image == null ? 'https://static.tvmaze.com/uploads/images/medium_landscape/76/190262.jpg' :  item.image.medium;
            return(
                <View style={styles.video} key={i}>
                     <View style={styles.videoEpisode}>
                     <ImageBackground
                            style={styles.image}
                            source={{uri: img }}
                    >
                            <View style={styles.buttonPlay}>
                                <TouchableWithoutFeedback>
                                    <View>
                                        <Icon
                                            style={styles.iconPlay}
                                            name="play-circle"
                                            size={30}
                                            color="white"
                                        />
                                    </View>

                                </TouchableWithoutFeedback>
                            </View>
                        </ImageBackground>
                        <View style={styles.episodeName}>
                            <Text>{item.number}. {item.name}</Text>
                            <Text>{item.runtime}</Text>
                        </View>
                    </View>
                    <Text style={styles.summary}>{item.summary}</Text>
                </View>
            )
        })

        return res
    }

    render(){
        console.log(this.props)
        return(
            <View>
                {this.renderEpisodes()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        width: 150,
        height:80,
        marginRight:10
    },
    buttonPlay:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    episodeName:{
        justifyContent:'center',
    },
    videoEpisode:{
        flexDirection:'row'
    },
    text:{
        color:'white'
    },
    summary:{
        color:'grey',
        marginVertical:10
    }
    


});


export default Episodes