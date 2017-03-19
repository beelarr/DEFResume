import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";

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

          <Text style={{
            width: 6,
            backgroundColor: this.state.gazeEnabled ? '#5FAFDF' : '#082B40',
            color: '#FCFCFC',
            fontSize: 0.5,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>Real Simple Email
          </Text>


          {this.state.gazeEnabled ?
              <View style={{flex: 1, flexDirection: 'row'}}>
                <RSE_Video/>
                <FeatureList/>
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
          }} source={asset('rse_pitch.webm')}
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
          <ListElement text="2.6 Billion emails processed"/>
          <ListElement text="13,000+ email templates generated"/>
          <ListElement text="Advanced campaign tracking"/>
          <ListElement text="Beautiful reports with Chart.js"/>
          <ListElement text="User-friendly mass segment scheduling"/>
          <ListElement text="Sold to the Tea Party"/>
          <ListElement text="PHP | JavaScript | MySQL"/>
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