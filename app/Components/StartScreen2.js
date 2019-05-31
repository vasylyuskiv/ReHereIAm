import React, { Component } from 'react';
import { View, ImageBackground, Text, Image} from 'react-native';
import styles from '../../styles';
import {ButtonFB} from './ButtonFB';



export class StartScreen2 extends Component {


  render() {

    return (
          <View style={styles.mainContainer}>
              <ImageBackground style={styles.bg}
                  source={require('../assets/Artwork/Bg.png')}
                  >
                  <Image style={styles.logo}  source={require('../assets/Artwork/Logo.png')} />
                  <Text style={styles.welcome}>Here I Am</Text>
                  <ButtonFB text="Facebook" onPress={() => {}}/>
              </ImageBackground>
          </View>
    );
  }
}















