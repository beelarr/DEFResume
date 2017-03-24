import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import Project_Container from "./components/project_container";
import Menu from "./components/menu";

class DEFResume extends React.Component {
  render() {
    return (
        <View>
          <Pano source={asset('bg/desert3_sm.jpg')}/>

          <View>
            <Menu/>
          </View>
        </View>
    );
  }
}

AppRegistry.registerComponent('DEFResume', () => DEFResume);
