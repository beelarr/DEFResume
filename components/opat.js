import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import FeatureList from "../ui/FeatureList";
import Header from "../ui/Header";

export default class OPAT extends React.Component {
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

          <Header text="OPAT" gazeEnabled={this.state.gazeEnabled}/>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <ImageCol img={'opat2.jpg'}/>
            <FeatureList features={[
              "Booz Allen Hamilton",
              "CMS TCPI Project",
              "Replaced Excel templates",
              "Distributed across USA",
              "Used by hundreds of clinicians",
              "JavaScript | React | Electron ",
            ]}/>
          </View>

        </View>
    );
  }
}

class ImageCol extends React.Component {
  static propTypes = {
    img: React.PropTypes.string.isRequired
  };

  render() {
    const img = this.props.img;
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Image style={{
            width: 3.2, height: 2.0,
          }} source={asset(img)}
          />
        </View>
    )
  }
}


