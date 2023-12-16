import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CurrencyItem = (props) => {
  const currencyName = props.data[0];
  const currencyDetail = props.data[1];
  const buyNumbers = (currencyDetail.end_rate).toFixed(2);
  const sellNumbers = (currencyDetail.start_rate).toFixed(2);

  return (
    <View style={styles.currencyItemContainer}>
      <Text style={styles.currencyNameText}>{currencyName}</Text>
      <Text style={styles.buyNumberText}>{`Buy: ${buyNumbers}`}</Text>
      <Text style={styles.sellNumbersText}>{`Sell: ${sellNumbers}`}</Text>
    </View>
  );
};

export default CurrencyItem;

const styles = StyleSheet.create({
  currencyItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#394240', // Arka plan rengi
    borderBottomWidth: 1,
    borderBottomColor: '#BFD3C1', // Alt çizgi rengi
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  currencyNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C4DFDF',
  },
  buyNumberText: {
    fontSize: 14,
    color: '#5ECC62', // Yeşil renk
  },
  sellNumbersText: {
    fontSize: 14,
    color: '#E94F37', // Kırmızı renk
  },
});
