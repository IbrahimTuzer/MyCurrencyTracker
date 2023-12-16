// ChartComponent.js
import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartComponent = ({ chartData }) => {
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>
      Monthly Statistics
      </Text>
      <LineChart
        data={chartData}
        width= {370}
        height={220}
        chartConfig={{
          backgroundColor: '#FFFFDD',
          backgroundGradientFrom: '#FFFFDD',
          backgroundGradientTo: '#FFFFDD',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
    </View>
  );
};

export default ChartComponent;
