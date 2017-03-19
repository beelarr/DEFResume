import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";

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
          transform: [{translate: [0, 0, -4]}],
        }}
              onEnter={() => this.setState({gazeEnabled: true})}
              onExit={() => this.setState({gazeEnabled: false})}
        >

          <Text style={{
            width: 6.5,
            backgroundColor: this.state.gazeEnabled ? '#5FAFDF' : '#082B40',
            color: '#FCFCFC',
            fontSize: 0.5,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>Consultant Simulator
          </Text>


          {this.state.gazeEnabled ?
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Consultant_Video/>
                <FeatureList/>
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
          }} source={asset('consultant.webm')}
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
          width: 2,
          justifyContent: 'center',
          //itemAlign: 'center'
        }}
        >
          <ListElement text="Platform Game"/>
          <ListElement text="ES6 JavaScript"/>
          <ListElement text="React"/>
          <ListElement text="Phaser.io"/>
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