import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  addTodo = text => {
    if (this.state.text.length > 0) {
      this.props.dispatch({type: 'AddTodo', text});
      this.setState({text: ''});
    }
  };

  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 10, height: 50}}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            multiline={true}
            onChangeText={text => this.setState({text})}
            value={this.state.text}
            placeholder="enter the data"
            style={{
              width: '90%',
              borderWidth: 1,
              borderColor: '#333',
              backgroundColor: '#999',
            }}
          />
          <TouchableOpacity
            style={{
              padding: 10,
              justifyContent: 'center',
              borderwidth: 3,
              backgroundColor: 'green',
            }}
            onPress={() => this.addTodo(this.state.text)}>
            <Text>add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(AddTodo);
