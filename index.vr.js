import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import RealSimpleEmail from "./components/realsimpleemail";

class DEFResume extends React.Component {
  render() {
    return (
        <View>
          <Pano source={asset('graffiti.jpg')}/>
          <RealSimpleEmail/>
        </View>
    );
  }
}

AppRegistry.registerComponent('DEFResume', () => DEFResume);
