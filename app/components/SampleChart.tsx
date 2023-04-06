import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const SampleChart = ({datas}) => {
  return (
    <View>
      <LineChart
        // data={{
        //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        //   datasets: [
        //     {
        //       data: [
        //         Math.random() * 100,
        //         Math.random() * 100,
        //         Math.random() * 100,
        //         Math.random() * 100,
        //         Math.random() * 100,
        //         Math.random() * 100,
        //       ],
        //     },
        //   ],
        // }}
        data={{
          labels: datas.labels,
          datasets: [
            {
              data: datas.datas,
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26aff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '1',
            strokeWidth: '1',
            stroke: '#000',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          marginRight: 20,
          elevation: 10,
        }}
      />
    </View>
  );
};

export default SampleChart;

const styles = StyleSheet.create({});
