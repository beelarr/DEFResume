import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import FeatureList from "../ui/FeatureList";
import Header from "../ui/Header";

export default class Shittalk extends React.Component {
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
        >

          <Header text="Shittalk Generator" gazeEnabled={this.state.gazeEnabled}/>


          <View style={{flex: 1, flexDirection: 'row'}}>
            <ImageCol img={'shittalk_kotaku1.jpg'}/>
            <FeatureList features={[
              "540,000+ votes",
              "9,500+ submissions",
              "300,000+ visitors",
              "Community-moderated insult repository",
              "JavaScript | PHP | MySQL | .CFG",
            ]}/>
            <ImageCol img={'shittalk_kotaku2.jpg'}/>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <ImageCol img={'shittalk_de.jpg'}/>
            <ImageCol img='shittalk_br.jpg'/>
            <ImageCol img={'shittalk_ru.jpg'}/>
          </View>


        </View>
    );
  }
}

class ImageCol extends React.Component {
  static propTypes = {
    img: React.PropTypes.string.isRequired,
  };

  render() {
    const img = `shittalk/${this.props.img}`;
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