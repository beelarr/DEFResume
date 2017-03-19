import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import FeatureList from "../ui/FeatureList";
import Header from "../ui/Header";

export default class RealSimpleEmail extends React.Component {
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

          <Header text="Real Simple Email" gazeEnabled={this.state.gazeEnabled}/>


          {this.state.gazeEnabled ?
              <View style={{flex: 1, flexDirection: 'row'}}>
                <RSE_Video/>
                <FeatureList features={[
                  "2.6 Billion emails processed",
                  "13,000+ email templates generated",
                  "Advanced campaign tracking",
                  "Beautiful reports with Chart.js",
                  "User-friendly bulk scheduling",
                  "Sold to the Tea Party",
                  "PHP | JavaScript | MySQL",
                ]}/>
              </View>
              : null}


        </View>
    );
  }
}

class RSE_Video extends React.Component {
  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Video style={{
            width: 3.5, height: 2.0,
          }} source={asset('vids/rse_pitch.webm')}
          />
        </View>
    )
  }
}
