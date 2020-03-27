import React, {useEffect} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import HttpClient from '../services/HttpClient';
import {useSelector, useDispatch} from 'react-redux';
import {fetchTodosAsync} from '../actions';
import {Button} from '../components/Button';

export const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.todos.isLoading);
  const items = useSelector(state => state.todos.items);
  const error = useSelector(state => state.todos.error);

  return (
    <View
      style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <Button
        btnText="Get Todos"
        touchCallback={() => dispatch(fetchTodosAsync())}
      />
      {isLoading && <ActivityIndicator size="small" color="red" />}
      {items && <Text>{JSON.stringify(items[1])}</Text>}
      {error && <Text>{JSON.stringify(error)}</Text>}
    </View>
  );
};
