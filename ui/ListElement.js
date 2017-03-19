import React from "react";
import {Text} from "react-vr";

export default class ListElement extends React.Component {
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