//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import CartListItem from '../../components/CartListItem';
import {useSelector} from 'react-redux';
import {
  selectDeliveryPrice,
  selectSubTotal,
  selectTotal,
} from '../../store/cartSlice';

// create a component
const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.items);
  const subtotal = useSelector(selectSubTotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({item}) => <CartListItem cartItem={item} />}
        ListFooterComponent={() => (
          <View style={styles.totalsContainer}>
            <View style={styles.row}>
              <Text style={styles.text}>Subtotal:</Text>
              <Text style={styles.text}>{subtotal} US$</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Delivery:</Text>
              <Text style={styles.text}>{deliveryFee} US$</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textBold}>Total:</Text>
              <Text style={styles.textBold}>{total} US$</Text>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => {}}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  totalsContainer: {
    padding: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textBold: {
    fontWeight: '500',
    fontSize: 16,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {color: 'white', fontWeight: '500', fontSize: 16},
});

//make this component available to the app
export default CartScreen;
