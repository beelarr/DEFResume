import React from "react";
import {View} from "react-vr";
import ListElement from "./ListElement";

export default class FeatureList extends React.Component {
  static propTypes = {
    features: React.PropTypes.array.isRequired,
  };

  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#082B40',
          justifyContent: 'center',
        }}
        >
          {this.props.features.map((txt) => {
            return <ListElement text={txt}/>
          })}
        </View>
    )
  }
}