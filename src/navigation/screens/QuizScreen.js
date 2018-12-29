import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

export default QuizScreen = (props) => {
  const getNavParamDeck = props.navigation.getParam('deck');
  return (
    <View style={styles.container}>
      <View style={styles.deck}>
        <View style={{flex: 1, alignSelf: 'stretch'}}>
          <Text style={styles.textCardNumber}>{"1/"+getNavParamDeck.questions.length}</Text>
          <Text style={styles.textTitle}>{getNavParamDeck.title}</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.textQuestion}>{getNavParamDeck.questions[0].question}</Text>
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
            onPress = {() => console.log("go Correct")}
            >
            <Text style={styles.textResponseButton}>{"Correct"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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
