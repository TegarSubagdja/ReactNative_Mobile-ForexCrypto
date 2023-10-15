import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Colors from "../constants/Colors";

const Home = () => {
    const [chartParentWidth, setChartParentWidth] = useState(0);

    return (
        <View style={{ flex: 1, gap: 20 }}>
            <View style={styles.topBar}>
                <Image source={require('../assets/icons/Menu_5.png')} />
                <View style={styles.container}>
                    <Image source={require('../assets/icons/Notification_1.png')} />
                    <Image source={require('../assets/icons/MaleUser.png')} />
                </View>
            </View>
            <View style={styles.body} onLayout={({ nativeEvent }) => setChartParentWidth(nativeEvent.layout.width)}>
                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [1, 2, 7, 4, 5, 2]
                            }
                        ]
                    }}
                    width={chartParentWidth}
                    height={200} // Set the height to 100% of the parent view's height
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1}
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 12
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier={false}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    body: {
        backgroundColor: Colors.baseColorGray,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Home;
