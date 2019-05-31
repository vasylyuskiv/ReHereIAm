import React from 'react';
import {
     TouchableHighlight, Text, Platform,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create ({
    $buttonColor: '#4267B2',
    $textColor: '#FFFFFF',
    $buttonColorUnderlay: '#7baaf9',
    button: {
        marginTop: 200,
      paddingVertical: 20,
      paddingHorizontal: 120,
        backgroundColor: '$buttonColor',
        '@media ios': {
          borderRadius: 50,
            shadowColor: '#000',
            shadowOffset: { width: -4, height: 0 },
            shadowOpacity: 0.15,
            shadowRadius: 2,
            elevation: 1,
        },
    },
    text: {
        fontWeight: "bold",
        color: '$textColor',
        fontSize: 20,

    }

});

export const ButtonFB = ({text, onPress }) =>{
    if (Platform.OS === 'ios') {
        {
            return (
                <TouchableHighlight
                    onPress={onPress}
                    style={styles.button}
                    underlayColor={styles.$buttonColorUnderlay}
                >

                    <Text style={styles.text}>{text}</Text>
                </TouchableHighlight>

            );
        }
    }
};