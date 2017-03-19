import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";

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
          transform: [{translate: [0, 0, -4]}],
        }}
              onEnter={() => this.setState({gazeEnabled: true})}
              onExit={() => this.setState({gazeEnabled: false})}
        >

          <Text style={{
            width: 6,
            backgroundColor: this.state.gazeEnabled ? '#5FAFDF' : '#082B40',
            color: '#FCFCFC',
            fontSize: 0.5,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>Shittalk Generator
          </Text>


          {this.state.gazeEnabled ?
              <View style={{flex: 1, flexDirection: 'row'}}>
                <ImageCol img={'shittalk_1.jpg'}/>
                <FeatureList/>
              </View>
              : null}

          {this.state.gazeEnabled ?
              <View style={{flex: 1, flexDirection: 'row'}}>
                <ImageCol img={'shittalk_3.png'}/>
                <ImageCol img={'shittalk_2.png'}/>
                <ImageCol img={'shittalk_4.png'}/>
              </View>
              : null}


        </View>
    );
  }
}

class ImageCol extends React.Component {
  static propTypes = {
    img: React.PropTypes.string.isRequired,
  };

  render() {
    const img = this.props.img;
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Image style={{
            width: 3.0, height: 2.0,
          }} source={asset(img)}
          />
        </View>
    )
  }
}

class FeatureList extends React.Component {
  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#082B40',
        }}
        >
          <ListElement text="540,000+ votes"/>
          <ListElement text="9,500+ submissions"/>
          <ListElement text="300,000+ visitors"/>
          <ListElement text="Community-moderated insult repository"/>
          <ListElement text="JavaScript | PHP | MySQL | .CFG"/>
        </View>
    )
  }
}

class ListElement extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
  };

  render() {
    return (
        <Text style={{
          fontSize: 0.22,
          textAlign: 'left',
          textAlignVertical: 'center',
          color: '#fefefe',
          marginLeft: 0.2
        }}>» {this.props.text}&nbsp;
        </Text>
    )
  }
}