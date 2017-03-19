import React from "react";
import {Text} from "react-vr";

export default class Header extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    gazeEnabled: React.PropTypes.bool.isRequired
  };

  render() {
    return (
        <Text style={{
          width: 6,
          backgroundColor: this.props.gazeEnabled ? '#5FAFDF' : '#082B40',
          color: '#FCFCFC',
          fontSize: 0.5,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>{this.props.text}
        </Text>
    )
  }
}