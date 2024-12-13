//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import products from '../../data/products';
import {width} from '../../theme/Dimensions';
import {useSelector, useDispatch} from 'react-redux';
import {cartSlice} from '../../store/cartSlice';
// create a component
const DetailsScreen = () => {
  const product = useSelector(state => state.products.selectedProduct);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({product}));
  };
  return (
    <View>
      <ScrollView>
        {/* Carousel */}
        <FlatList
          data={product.images}
          renderItem={({item}) => (
            <View>
              <Image source={{uri: item}} style={styles.carouselImage} />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={styles.productInfoContainer}>
          {/* Title */}
          <Text style={styles.title}>{product.name} </Text>
          {/* Price */}
          <Text style={styles.price}>${product.price} </Text>
          {/* Description */}
          <Text style={styles.description}>{product.description} </Text>
        </View>
      </ScrollView>
      {/* Add to cart Button */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={addToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  carouselImage: {width, aspectRatio: 1},
  productInfoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 20,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 300,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 20,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {color: 'white', fontWeight: '500', fontSize: 16},
});

//make this component available to the app
export default DetailsScreen;
