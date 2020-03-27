import React, {useState, useRef} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {Button} from './Button';
import ActionSheet from 'react-native-actionsheet';
import {Picker} from '@react-native-community/picker';

export const PickerView = () => {
  const [date, setDate] = useState('');
  const [option, setOption] = useState('');
  const [office, setOffice] = useState('Karachi');
  const actionSheetRef = useRef(null);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <DatePicker
        style={{width: 200}}
        date={date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2012-05-01"
        maxDate="2020-12-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={date => setDate(date)}
      />
      <View
        style={{
          height: 20,
          borderTopColor: 'black',
          borderTopWidth: 1,
          marginTop: 20,
        }}
      />
      <Button
        btnText="Open ActionSheet"
        touchCallback={() => {
          actionSheetRef.current.show();
        }}
      />
      <ActionSheet
        ref={actionSheetRef}
        title={'Please select?'}
        options={['Air', 'Land', 'Fire', 'Sand', 'OK']}
        cancelButtonIndex={4}
        onPress={index => {
          console.log(index);
          if (index == 4) {
            setOption('');
          } else {
            setOption(index);
          }
        }}
      />
      <Text>{`selected option in actionsheet is ${option}`}</Text>

      <View
        style={{
          height: 20,
          borderTopColor: 'black',
          borderTopWidth: 1,
          marginTop: 20,
        }}
      />
      <Picker
        selectedValue={office}
        style={{height: 200, width: '100%'}}
        onValueChange={(itemValue, itemIndex) => setOffice(itemValue)}>
        <Picker.Item label="Karachi" value="Karachi" />
        <Picker.Item label="Columbia" value="Columbia" />
        <Picker.Item label="Washington DC" value="Washington DC" />
        <Picker.Item label="San Francisco" value="San Francisco" />
        <Picker.Item label="India" value="India" />
        <Picker.Item label="Toronto" value="Toronto" />
      </Picker>
      <Text>{`selected option in picker is ${office}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
