import React, {Component} from 'react'
import {View,Text, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from 'react-native-side-menu/build/styles';

class Episodes extends Component{
    renderEpisodes(){
        const res = this.props.episodes.map((item, i) => {
            return(
                <View style={styles.video} key={i}>
                     <View style={styles.videoEpisode}>
                        <Image>
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
                        </Image>
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
            <View style={styles.container}>
                {this.renderEpisodes()}
            </View>
        )
    }


}


export default Episodes