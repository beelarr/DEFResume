import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";

export default class RealSimpleEmail extends React.Component {
  constructor() {
    super();
    this.state = {gazeEnabled: false}
  }

  render() {
    return (
        <View style={{layoutOrigin: [0.5, 0.5], transform: [{translate: [0, 0, -3]}],}}
              onEnter={() => this.setState({gazeEnabled: true})}
              onExit={() => this.setState({gazeEnabled: false})}
        >

          <Text style={{
            backgroundColor: this.state.gazeEnabled ? 'red' : null
          }}>Real Simple Email</Text>

          {this.state.gazeEnabled ?
              <View>
                <Video style={{width: 3.5, height: 2.0,}} source={asset('rse_pitch.webm')}/>
              </View>
              : null}


        </View>
    );
  }
}

