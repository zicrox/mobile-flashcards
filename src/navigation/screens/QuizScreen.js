import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

// Displays the percentage correct once the quiz is complete
// DONE the number of cards left in the quiz
export default class QuizScreen extends React.Component {
  // getNavParamDeck = this.props.navigation.getParam('deck');
  
  state = {
    getNavParamDeck: this.props.navigation.getParam('deck'),
    cardCounter: 0,
  }
  
  onCorrect = () => {
    if(this.state.cardCounter <= this.state.getNavParamDeck.questions.length - 2){
      this.setState((prevState) => {
        return ({ cardCounter: prevState.cardCounter + 1 });
      });
    }else{
      Alert.alert('This deck do not have more cards');
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <View style={{flex: 1, alignSelf: 'stretch'}}>
            <Text style={styles.textCardNumber}>{(this.state.cardCounter+1)+"/"+this.state.getNavParamDeck.questions.length}</Text>
            <Text style={styles.textTitle}>{this.state.getNavParamDeck.title}</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={styles.textQuestion}>{this.state.getNavParamDeck.questions[this.state.cardCounter].question}</Text>
            <Button
              onPress={() => console.log("go Answer")}
              title="Answer"
            />
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={styles.incorrectButton}
              activeOpacity={0.5}
              onPress = {() => console.log("go Incorrect")}
              >
              <Text style={styles.textResponseButton}>{"Incorrect"}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.correctButton}
              activeOpacity={0.5}
              onPress = {this.onCorrect}
              >
              <Text style={styles.textResponseButton}>{"Correct"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

QuizScreen.navigationOptions = {
  headerTitle: 'Quiz',
  headerStyle: {
    backgroundColor: '#88bea3',
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABCDEF',
    alignItems: 'stretch',
    paddingTop: 20,
  },
  deck: {
    flex: 1,
    backgroundColor: '#f1f1ba',
    alignItems: 'center',
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#719e71',
    alignSelf: 'center',
  },
  textQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  textCardNumber: {
    fontSize: 17,
    color: 'grey',
    alignSelf: 'flex-start',
    margin: 10,
    marginLeft: 15,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    padding: 5,
  },
  correctButton: {
    backgroundColor: '#9ad89a',
    padding: 15,
    borderRadius: 10,
    margin: 5,
  },
  incorrectButton: {
    backgroundColor: '#d89a9a',
    padding: 15,
    borderRadius: 10,
    margin: 5,
  },
  textResponseButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
