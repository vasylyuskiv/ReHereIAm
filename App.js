
import React, {Component} from 'react';
import EStyleSheet from "react-native-extended-stylesheet";
import {StartScreen2} from "./app/Components/StartScreen2";
import {MapScreen} from "./app/Components/MapScreen";
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import MapArea from './app/Components/MapArea';


EStyleSheet.build();


const AppStuckNavigator = createStackNavigator({
        HomeRT:  StartScreen2, MapRT: MapScreen, HotArea: MapScreen },{ defaultNavigationOptions:{
            headerStyle:{backgroundColor:'orange'}

    }


            });
const AppDrawerNavigator = createDrawerNavigator({
    HomeRT:  StartScreen2, MapRT: MapScreen, HotArea: MapArea  },{ defaultNavigationOptions: {
        headerStyle: {backgroundColor: 'orange'}

    }

});
const AppContainer = createAppContainer(AppDrawerNavigator);

export default class App extends  React.Component {
    render(){
    return < AppContainer />;
    }
}


// const App = createAppContainer(MainNavigator);
//
// export default App;
// const MyRoutes = StackNavigator({
//   HomeRT: {
//     screen: StartScreen2
//   },
//   MapRT: {
//     screen: MapScreen
//   },
// },
// {
//   initialRouteName: 'HomeRT'
//
// });
//
// export default class App extends Component {
//   render() {
//     return (
//     <MyRoutes/>
//
//     );
//   }
// }



