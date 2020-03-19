import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';

class Todolist extends React.Component {
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log(nextProps, '@@##@@');
  // }

  render() {
    const {todos} = this.props;
    const {ToggleTodo} = this.props;
    const {DeleteTodo} = this.props;

    return (
      <ScrollView>
        {this.props.todos.map((todo, index) => {
          return (
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '88%'}}>
                <TouchableOpacity
                  key={index}
                  style={{
                    marginTop: 10,
                    borderWidth: 3,

                    borderColor: '#333',
                  }}
                  onPress={() => ToggleTodo(todo.id)}>
                  <Text style={todo.completed ? styles.init : styles.empty}>
                    {todo.text}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 10, height: 60}}>
                <TouchableOpacity
                  style={{backgroundColor: 'blue', height: 30}}
                  onPress={() => DeleteTodo(todo.id)}>
                  <Text style={{color: 'white'}}> Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

//   style={todo.completed?styles.init:styles.empty}
const mapStateToProps = ({Todos}) => {
  return {
    todos: Todos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ToggleTodo: id => dispatch({type: 'ToggleTodo', id: id}),
    DeleteTodo: id => dispatch({type: 'DeleteTodo', id: id}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);

const styles = StyleSheet.create({
  init: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  empty: {fontSize: 20, fontWeight: 'bold'},
});
