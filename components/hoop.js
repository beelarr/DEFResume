import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import FeatureList from "../ui/FeatureList";
import Header from "../ui/Header";

export default class Hoop extends React.Component {
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
          transform: [{translate: [0, 0, -4]}],
        }}
              onEnter={() => this.setState({gazeEnabled: true})}
              onExit={() => this.setState({gazeEnabled: false})}
        >

          <Header text="LED Hula Hoop" gazeEnabled={this.state.gazeEnabled}/>

          {this.state.gazeEnabled ?
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Hoop_Video/>
                <FeatureList features={[
                  "Arduino powered",
                  "20+ light patterns",
                  "1.5 hour battery life",
                  "C | C++"
                ]}/>
              </View>
              : null}


        </View>
    );
  }
}

class Hoop_Video extends React.Component {
  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Video style={{
            width: 3.5, height: 2.0,
          }} source={asset('vids/hoop.webm')}
          />
        </View>
    )
  }
}


