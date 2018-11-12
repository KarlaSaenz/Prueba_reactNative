import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'


const {width}= Dimensions.get('window')

const styles = {
    container:{
        height:220
    },
    containerImage:{
        flex: 1,
        justifyContent: 'center'
        
    },
    image: {
        flex: 1,
        width
    }
};

export default class extends Component{
    constructor(props){
        super(props)
        this.state = {
            imagesSlider: []
        }
    }

    componentDidMount () {
        this.setState({
            imagesSlider: [
                require('../images/1.jpg'),
                require('../images/2.jpg'),
                require('../images/3.jpg')
            ]
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Swiper
                    autoplay={true}
                >
                    {this.state.imagesSlider.map((item, key) => {
                        return (
                            <View key={key} style={styles.containerImage} >
                                <Image style={styles.image} source={item} />
                            </View>
                        )
                    })}
                </Swiper>
            </View>
            
        )
    }
}