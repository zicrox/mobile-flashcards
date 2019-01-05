import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class Card extends React.Component {
  state = {
    showAnswer: false,
  }
  
  onLeave      = () => {this.setState(() => ({showAnswer: false}))};
  onShowAnswer = () => {this.setState((prevState) => ({showAnswer: !prevState.showAnswer}))};
  onCorrect    = () => {this.props.onCorrect();   this.onLeave()};
  onInCorrect  = () => {this.props.onInCorrect(); this.onLeave()};
  
  render() {
      return (
      <View style={styles.card}>
        <View style={{flex: 1, alignSelf: 'stretch'}}>
          <Text style={styles.textCardNumber}>{(this.props.cardCounter+1)+"/"+this.props.navParamDeck.questions.length}</Text>
          <Text style={styles.textTitle}>{this.props.navParamDeck.title}</Text>
        </View>
        <View style={{flex: 3}}>
          {this.state.showAnswer ? (
            <React.Fragment>
              <Text style={styles.textAnswer}>{this.props.navParamDeck.questions[this.props.cardCounter].answer}</Text>
              <Button
                onPress={this.onShowAnswer}
                title="Question"
              />
            </React.Fragment>
          ):(
            <React.Fragment>
              <Text style={styles.textQuestion}>{this.props.navParamDeck.questions[this.props.cardCounter].question}</Text>
              <Button
                onPress={this.onShowAnswer}
                title="Answer"
              />
            </React.Fragment>
          )}
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.incorrectButton}
            activeOpacity={0.5}
            onPress = {this.onInCorrect}
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
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#f1f1ba',
    alignItems: 'center',
    margin: 30,
    marginHorizontal: 15,
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
    margin: 20,
  },
  textAnswer: {
    fontSize: 16,
    color: 'grey',
    margin: 20,
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
