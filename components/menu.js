import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Video, Image} from "react-vr";
import Arborist from "./arborist";
import Cellcion from "./cellcion";
import Consultant_Simulator from "./consultant_simulator";
import Data_Analytics from "./data_analytics";
import Data_Ingest from "./data_ingest";
import Hoop from "./hoop";
import OPAT from "./opat";
import RealSimpleEmail from "./realsimpleemail";
import Shittalk from "./shittalk";

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      gazeEnabled: false,
      currentProject: OPAT
    };

    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(comp) {
    if (!comp || comp == this.state.currentProject) return;
    this.setState({currentProject: comp})
  }

  render() {
    return (
        <View style={{layoutOrigin: [0.7, 0.5],}}>

          <View style={{flex: 1, flexDirection: 'row',}}>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              transform: [{rotateY: 80}, {translate: [0, 0, 2]}],
              width: 6.5
            }}>
              <MenuList updateDisplay={this.updateDisplay}/>
            </View>

            <View style={{flex: 1, flexDirection: 'column', width: 10, transform: [{translate: [0, 0, -4.5]}]}}>
              <this.state.currentProject />
            </View>
          </View>

        </View>
    );
  }
}

class MenuList extends React.Component {
  static propTypes = {
    updateDisplay: React.PropTypes.func.isRequired,
  };

  render() {
    return (
        <View>

          <MenuOption comp={Cellcion}
                      updateDisplay={this.props.updateDisplay}
                      text={'Cellcion UI'}/>

          <MenuOption comp={RealSimpleEmail}
                      updateDisplay={this.props.updateDisplay}
                      text={'RealSimpleEmail.com'}/>

          <MenuOption comp={Data_Ingest}
                      updateDisplay={this.props.updateDisplay}
                      text={'TCPI Data Ingest'}/>


          <MenuOption comp={Data_Analytics}
                      updateDisplay={this.props.updateDisplay}
                      text={'TCPI Data Analytics'}/>

          <MenuOption comp={Consultant_Simulator}
                      updateDisplay={this.props.updateDisplay}
                      text={'Consultant Simulator'}/>

          <MenuOption comp={Arborist}
                      updateDisplay={this.props.updateDisplay}
                      text={'Arborist'}/>

          <MenuOption comp={Hoop}
                      updateDisplay={this.props.updateDisplay}
                      text={'LED Hula Hoop'}/>

          <MenuOption comp={Arborist}
                      updateDisplay={this.props.updateDisplay}
                      text={'Bonsai Arborist'}/>

          <MenuOption comp={Shittalk}
                      updateDisplay={this.props.updateDisplay}
                      text={'Shittalk Generator'}/>

          <MenuOption comp={OPAT}
                      updateDisplay={this.props.updateDisplay}
                      text={'OPAT (Online Practice Assessment Tool)'}/>
        </View>
    )
  }
}

class MenuOption extends React.Component {
  constructor() {
    super();
    this.state = {gazeEnabled: false};
  }

  static propTypes = {
    comp: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired,
    updateDisplay: React.PropTypes.func.isRequired,
  };

  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{rotateY: 0}, {translate: [0, 0, -2.5]},],
        }}
              onEnter={() => {
                this.props.updateDisplay(this.props.comp);
                this.setState({gazeEnabled: true})
              }}
              onExit={() => this.setState({gazeEnabled: false})}
        >
          <Text style={{
            width: 6.5,
            backgroundColor: this.state.gazeEnabled ? '#5FAFDF' : '#082B40',
            color: '#FCFCFC',
            fontSize: 0.3,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>{this.props.text}
          </Text>
        </View>
    )
  }
}
