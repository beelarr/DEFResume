import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import FeatureList from "../ui/FeatureList";
import Header from "../ui/Header";

export default class Cellcion extends React.Component {
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

          <Header text="Cellcion" gazeEnabled={this.state.gazeEnabled}/>

          {this.state.gazeEnabled ?
              <View style={{flex: 1, flexDirection: 'row'}}>
                <ImageCol/>
                <FeatureList features={[
                  "Client: Cellcion, LLC",
                  "Automated flow cytometry",
                  "Wide range of workflows",
                  "R | Shiny | Bootstrap",
                ]}/>
              </View>
              : null}


        </View>
    );
  }
}

class ImageCol extends React.Component {
  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Image style={{
            width: 3.2, height: 2.0,
          }} source={asset('cellcion_ui.jpg')}
          />
        </View>
    )
  }
}


