import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors.js';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes.js';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);

  return (
    <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.inputCont}>
            <TextInput
              style={styles.textInput}
              label="What would You like to focus on?"
              onChangeText={setSubject}
            />
            <View style={styles.button}>
                <RoundedButton title="+" size={50} onPress={() => addSubject(subject)}/>
            </View>
        </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  inputCont: {
    padding: 24,
    flexDirection:'row',
  },
  button: {
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  }
});
