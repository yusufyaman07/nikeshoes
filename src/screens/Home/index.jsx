//import liraries
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {productSlice} from '../../store/productSlice';

// create a component
const HomeScreen = ({navigation}) => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <TouchableOpacity
            onPress={() => {
              dispatch(productSlice.actions.setSelectedProduct(item.id));
              navigation.navigate('Details');
            }}>
            <Image
              style={styles.image}
              source={{
                uri: item.image,
              }}
              numColumns={2}
            />
          </TouchableOpacity>
        </View>
      )}
      numColumns={2}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {width: '100%', aspectRatio: 1},
});

//make this component available to the app
export default HomeScreen;
