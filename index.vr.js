import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import RealSimpleEmail from "./components/realsimpleemail";
import Shittalk from "./components/shittalk";
import Consultant_Simulator from "./components/consultant_simulator";
import Arborist from "./components/arborist";
import Cellcion from "./components/cellcion";
import Hoop from "./components/hoop";

class DEFResume extends React.Component {
  render() {
    return (
        <View>
          <Pano source={asset('bg/desert3_sm.jpg')}/>
          <View style={{layoutOrigin: [0.5, 0.5],}}>
            <View style={{flex: 1, flexDirection: 'row',}}>
              <Cellcion/>
              <RealSimpleEmail/>
              <Arborist/>

              <Shittalk/>
              <Consultant_Simulator/>
              <Hoop/>

            </View>
          </View>
        </View>
    );
  }
}

AppRegistry.registerComponent('DEFResume', () => DEFResume);
