import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import FeatureList from "../ui/FeatureList";
import Header from "../ui/Header";

export default class Arborist extends React.Component {
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
          transform: [{rotateY: -43}, {translate: [-1.5, 0, -1]},],
        }}
              onEnter={() => this.setState({gazeEnabled: true})}
              onExit={() => this.setState({gazeEnabled: false})}
        >

          <Header text="Bonsai Arborist" gazeEnabled={this.state.gazeEnabled}/>

          {this.state.gazeEnabled ?
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Arborist_Video/>
                <FeatureList features={[
                  "Client: Bonsai Electronics",
                  "Part of $15,000 package",
                  "File-sorting for 360° films",
                  "Streamlines editing workflow",
                  "For 4+ cameras",
                  "Node.js | React | Electron",
                ]}/>
              </View>
              : null}


        </View>
    );
  }
}

class Arborist_Video extends React.Component {
  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Video style={{
            width: 3.5, height: 2.0,
          }} source={asset('vids/arborist.webm')}
          />
        </View>
    )
  }
}


