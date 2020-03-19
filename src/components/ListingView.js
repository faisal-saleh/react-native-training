import React, {useState, useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Button} from './Button';
import {Cell} from './Cell';

function createItem(number) {
  return {
    id: number,
    name: `item${number}`,
    desc: 'Some text',
  };
}

export const ListingView = () => {
  const [items, setItems] = useState([]);
  const [counter, setCounter] = useState(0);

  const addNewItem = useCallback(() => {
    const newItem = createItem(items.length);
    setItems(items => [...items, newItem]);
  }, [items]);

  useEffect(() => {
    console.log('Just got mounted');
    return () => {
      console.log('Just got removed');
    };
  }, [items]);

  return (
    <>
      <Button btnText="Add New Item" touchCallback={addNewItem} />
      <FlatList
        renderItem={({item}) => <Cell item={item} />}
        initialScrollIndex={0}
        data={items}
        keyExtractor={item => item.name}
      />
    </>
  );
};
