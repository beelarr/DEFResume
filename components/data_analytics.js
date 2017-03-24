import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import FeatureList from "../ui/FeatureList";
import Header from "../ui/Header";

export default class Data_Analytics extends React.Component {
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
        }}
              onEnter={() => this.setState({gazeEnabled: true})}
              onExit={() => this.setState({gazeEnabled: false})}
        >

          <Header text="DataHub - Analytics" gazeEnabled={this.state.gazeEnabled}/>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <FeatureList features={[
              "Booz Allen Hamilton",
              "CMS TCPI Project",
              "10,000+ Lines of Code",
              "Analyzes nationwide clinician data",
              "Generates automated actionable reports   ",
              "Python | Postgres | Pandas | AWS  ",
            ]}/>
          </View>

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


