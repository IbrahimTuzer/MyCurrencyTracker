// Home.js
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, KeyboardAvoidingView, SafeAreaView, Text, TextInput, View } from 'react-native';
import axios from 'axios';
import { CurrencyItem, ChartComponent} from '../components/';
import { Dimensions } from 'react-native';


const screenWidth = Dimensions.get('window').width;

const Home = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchText, setSearchText] = useState('');
  const [filteredCurrencyData, setFilteredCurrencyData] = useState([]);

  useEffect(() => {
    axios.get('https://api.apilayer.com/currency_data/change', {
      headers: { 'apikey': process.env.EXPO_PUBLIC_API_KEY }
    })
      .then((res) => {
        const data = Object.entries(res.data.quotes);
        setCurrencyData(data);
        setFilteredCurrencyData(data);
      })
      .catch((err) => setErrorMessage(err));
  }, []);

  const handleSearch = (value) => {
    setSearchText(value);
    const filteredData = currencyData.filter(([currencyName]) =>
      currencyName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCurrencyData(filteredData);
  };

  
  
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#FFFFDD' }}>
        <SafeAreaView style={styles.container}>
          <TextInput
            style={styles.textInputContainer}
            placeholder="Search..."
            placeholderTextColor="gray"
            onChangeText={handleSearch}
            value={searchText}
          />
          <View style={styles.currencyContainer}>
            <View style={styles.headersContainer}>
              <Text style={styles.currencyText}>Currency</Text>
              <Text style={styles.buyText}>Buy</Text>
              <Text style={styles.sellText}>Sell</Text>
            </View>
            <View style={styles.flatListContainer}>
              <FlatList
                data={filteredCurrencyData}
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                  return (
                    <CurrencyItem data={item} />
                  );
                }}
              />
            </View>
          </View>
          
          <ChartComponent chartData={chartData} />
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textInputContainer: {
    borderWidth: 0.2,
    borderColor: "black",
    width: '95%',
    marginVertical: 15,
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: "gray",
  },
  currencyContainer: {
    flex: 5,
    borderWidth: 0.2,
    borderRadius: 10,
    borderColor: "#F4EEEE",
    marginVertical: 5,
    width: '95%',
    backgroundColor: '#FFFFDD',
  },
  headersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingRight: 30,
    width: '90%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  currencyText: {
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.5,
    color: "black",
  },
  buyText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green',
  },
  sellText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
  },
  flatListContainer: {
    width: '100%',
    height: "80%", 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
  },
});

export default Home;
