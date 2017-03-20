import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import Arborist from "./arborist";
import Cellcion from "./cellcion";
import Consultant_Simulator from "./consultant_simulator";
import Data_Analytics from "./data_analytics";
import Data_Ingest from "./data_ingest";
import Hoop from "./hoop";
import OPAT from "./opat";
import RealSimpleEmail from "./realsimpleemail";
import Shittalk from "./shittalk";

export default class Project_Container extends React.Component {
  render() {
    return (
        <View style={{layoutOrigin: [0.5, 0.5],}}>
          <View style={{flex: 1, flexDirection: 'row',}}>

            <Side_Projects />
            <BAH_Projects />
            <Consulting_Projects />

          </View>
        </View>
    );
  }
}


class Side_Projects extends React.Component {
  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          transform: [{rotateY: 120}, {translate: [-9, 0, 13]},],
          alignItems: 'center',
        }}>

          <View style={{flex: 1, flexDirection: 'row',}}>
            <Consultant_Simulator/>
          </View>

          <View style={{flex: 1, flexDirection: 'row',}}>
            <Hoop/>
            <Shittalk/>
          </View>
        </View>
    )
  }
}

class Consulting_Projects extends React.Component {
  render() {
    return (
        <View style={{
          flex: 1, flexDirection: 'column',
          transform: [{rotateY: -120}, {translate: [8, 0, 12]},],
          alignItems: 'center',
        }}>
          <View style={{flex: 1, flexDirection: 'row',}}>
            <RealSimpleEmail/>
          </View>

          <View style={{flex: 1, flexDirection: 'row',}}>
            <Cellcion/>
            <Arborist/>
          </View>
        </View>
    )
  }
}

class BAH_Projects extends React.Component {
  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column', transform: [{translate: [0, 0, -2]},],}}>
          <View style={{flex: 1, flexDirection: 'row',}}>
            <Data_Ingest/>
            <OPAT/>
            <Data_Analytics/>
          </View>
        </View>
    )
  }
}

