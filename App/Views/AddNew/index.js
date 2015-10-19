'use strict';

var React = require('react-native');
var Reflux = require('reflux');
var store = require('react-native-simple-store');

var UtilFuncs = require('../../Utils/functions.js');

var {
  Text,
  TouchableHighlight,
  View,
  TextInput,
} = React;

// Flux
var StockActions = require('../../Utils/Stock/actions');

var styles = require('./style');

var AddNewView = React.createClass({
  getInitialState() {
    return {
      text: null,
    };
  },

  _onPressSaveButton: function () {
    if (this.state.text) {
      console.log('New added', this.state.text);
      StockActions.addStock(this.state.text);
      this.props.navigator.pop();
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.helpText}>
          Type stock symbol.
        </Text>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchBarInput}
            autoFocus={true}
            placeholder='symbol..'
            placeholderTextColor='gray'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TouchableHighlight style={styles.cancelButton}
  		    	underlayColor='black'
  		    	onPress={() => this.props.navigator.pop()}>
  		    	<Text style={styles.cancelButtonText}>
  		    		Cancel
  		    	</Text>
  		  	</TouchableHighlight>
        </View>
        <TouchableHighlight style={styles.button}
		    	underlayColor='#66C2FF'
		    	onPress={this._onPressSaveButton}>
		    	<Text style={styles.buttonText}>
		    		Add
		    	</Text>
		  	</TouchableHighlight>
      </View>
    );
  }
});

module.exports = AddNewView;
