import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import RealSimpleEmail from "./components/realsimpleemail";
import Shittalk from "./components/shittalk";
import Consultant_Simulator from "./components/consultant_simulator";

class DEFResume extends React.Component {
  render() {
    return (
        <View>
          <Pano source={asset('castle.png')}/>
          <View style={{flex: 1, flexDirection: 'row',  layoutOrigin: [0.5, 0.5],}}>
            <Consultant_Simulator/>
            <RealSimpleEmail/>
            <Shittalk/>
          </View>
        </View>
    );
  }
}

AppRegistry.registerComponent('DEFResume', () => DEFResume);
