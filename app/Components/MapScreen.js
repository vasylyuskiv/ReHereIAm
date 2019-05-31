import React, { Component } from 'react';
import MapView, {Marker, MAP_TYPES } from 'react-native-maps';
import styles from "../../styles";
import {Text, View, Image,} from "react-native";
import Bar from './EventComps/Bar'


const region = {
    latitude: 49.84187801733361,
    longitude: 24.031605720520023,
    latitudeDelta: 0.00500,
    longitudeDelta: 0.00121,

};
export class MapScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { markers: {latitude: 49.849254,
                longitude: 23.979407},
            markers2: {latitude: 49.84288818345569,
                longitude: 24.030028581619266},


        };
        // this.handlePress = this.handlePress.bind(this);
    }
        // handlePress (e) {
        //     this.setState ({
        //     markers: [
        //          ...this.state.markers,
        //          {
        //              coordinate: e.nativeEvent.coordinate,
        //          }
        //  ]})}


        render() {


    return (
        <View style={styles.container}>
        <MapView style={styles.map}
            initialRegion={region}
                 onPress={ this.handlePress}
                 showsUserLocation={true}
                 followsUserLocation={true}
                 userLocationAnnotationTitle={'I Am Here'}
                 mapType={MAP_TYPES.STANDARD}
                 showsPointsOfInterest={false}
                 showsScale={true}
                 showsBuildings={true}
                 showsTraffic={false}
                 showsIndoors={true}
                 zoomEnabled={true}
        >
           {/*{this.state.markers.map((marker) => {*/}
           {/* return <Marker*/}
            {/*    {...marker}*/}
            {/*    image={require('../assets/Artwork/Logo.png')}*/}
            {/*/> })}*/}


            <Marker
                coordinate={ this.state.markers2
                }

            >
                <Bar/>
            </Marker>

            <Marker
            coordinate={ this.state.markers
            }

            >

                <Image source={require('../assets/Artwork/2.png')}

                       style={styles.marker} />
            </Marker>

            <Text style={styles.instructions}>Log Out</Text>
        </MapView>
        </View>

    );
  }
}