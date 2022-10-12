import {StyleSheet} from 'react-native';

export default ProductItemStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    margin: 5,
    borderWidth: 4,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    flex: 2,
    resizeMode: 'contain',
  },
  title: {color: '#000', fontSize: 16, fontWeight: 'bold'},
  description: {color: 'green', fontSize: 14},
  price: {color: '#000'},
  rightContainer: {
    marginLeft: 10,
    flex: 3,
    justifyContent: 'space-evenly',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    paddingRight: 4,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    marginLeft: 4,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
