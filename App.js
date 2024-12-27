import React, {useState} from 'react';
import {Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <SafeAreaView style={styles.appStyle}>
      <Text style={styles.textStyle}> 
        Service Satisfaction React Native Slider Element 
      </Text>
      <View>
        <Text style={styles.textStyle}>
          How satisfied were you with the service you recieved?
        </Text>
        <Slider
          step={1}
          minimumValue={0}
          maximumValue={100}
          value={value}
          onValueChange={slideValue => setValue(slideValue)}
          minimumTrackTintColor="green"
          maximumTrackTintColor="gray"
          thumbTintColor="black"
        />
        <Text style={styles.textStyle}>
          Satisfaction level: {value}%
        </Text>
      </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appStyle: {
    margin: 8
  },
  textStyle: {
    marginTop: 8,
    marginBottom: 8
  }
});
export default App;