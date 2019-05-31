import React, { Component } from 'react';
import { View, Image} from 'react-native';
import styles from '../../../styles';
import { Dimensions, TouchableHighlight, Text } from 'react-native';


export default class Bar extends Component {
    render() {

        return (
            <View>
                <TouchableHighlight
                    style = {styles.circle}
                    underlayColor = '#ccc'
                    onPress = { () => alert('Yaay!') }
                >
                    <Image source={require('../../assets/Artwork/5.png')}

                           style={styles.marker} />
                </TouchableHighlight>

            </View>

        );
    }
}