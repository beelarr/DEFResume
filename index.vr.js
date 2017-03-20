import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import Project_Container from "./components/project_container";

class DEFResume extends React.Component {
  render() {
    return (
        <View>
          <Pano source={asset('bg/desert3_sm.jpg')}/>
          <Project_Container/>
        </View>
    );
  }
}

AppRegistry.registerComponent('DEFResume', () => DEFResume);
