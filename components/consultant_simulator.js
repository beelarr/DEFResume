import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import FeatureList from "../ui/FeatureList";
import Header from "../ui/Header";

export default class Consultant_Simulator extends React.Component {
  constructor() {
    super();
    this.state = {gazeEnabled: false}
  }

  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{rotateY: 35}, {translate: [1.3, 0, -1.7]},],
        }}
              onEnter={() => this.setState({gazeEnabled: true})}
              onExit={() => this.setState({gazeEnabled: false})}
        >

          <Header text="Consultant Simulator" gazeEnabled={this.state.gazeEnabled}/>


          {this.state.gazeEnabled ?
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Consultant_Video/>
                <FeatureList features={[
                  'Platform Game',
                  'Phaser.io Framework',
                  'ES6 JavaScript',
                  'React',
                  'Personal Best Timer'
                ]}/>
              </View>
              : null}


        </View>
    );
  }
}

class Consultant_Video extends React.Component {
  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Video style={{
            width: 4, height: 2.0,
          }} source={asset('vids/consultant.webm')}
          />
        </View>
    )
  }
}
