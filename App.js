import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import LanguageScreen from './screens/language';

const App = () => {

  return(
    <ScrollView style={styles.screen}>
      <LanguageScreen />
    </ScrollView>
  );


}
const styles = StyleSheet.create({
  screen:{
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2'
},
})
export default App;