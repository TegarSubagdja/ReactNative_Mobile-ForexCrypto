import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Colors from "../constants/Colors";

const Home = () => {
    const [chartParentWidth, setChartParentWidth] = useState(0);

    return (
        // View Parent
        <View style={{ flex: 1, gap: 20, backgroundColor: Colors.brandColorGray, padding: 20 }}>

            {/* View Bagian atas */}
            <View style={styles.topBar}>
                <Image source={require('../assets/icons/Menu_5.png')} />
                <View style={styles.container}>
                    <Image source={require('../assets/icons/Notification_1.png')} />
                    <Image source={require('../assets/icons/MaleUser.png')} />
                </View>
            </View>

            {/* View untuk line Chart */}
            <View style={styles.body} onLayout={({ nativeEvent }) => setChartParentWidth(nativeEvent.layout.width)}>
                <Text style={{ color: 'white', margin: 10 }}>Bezier Line Chart</Text>
                <LineChart
                    data={{
                        labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={chartParentWidth} // from react-native
                    height={200}
                    // yAxisLabel="$"
                    // yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "black",
                        // backgroundGradientFrom: Colors.brandColorGray,
                        // backgroundGradientTo: Colors.brandColorGray,
                        decimalPlaces: 1, // optional, defaults to 2dp
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
                    bezier
                    style={{
                        marginVertical: 0,
                        borderRadius: 12
                    }}
                />
            </View>


            {/* View untuk sensor value */}
            <View style={{ gap: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
                    <View style={{
                        gap: 10,
                        backgroundColor: Colors.baseColorGray,
                        padding: 20,
                        borderRadius: 12,
                        flex: 1
                    }}>
                        <Image source={require('../assets/icons/Thermometer.png')} />
                        <Text style={{ color: 'white' }}>Temperatur</Text>
                        <Text style={{ color: 'white', fontSize: 25 }}>25*</Text>
                    </View>
                    <View style={{
                        gap: 10,
                        backgroundColor: Colors.baseColorGray,
                        padding: 20,
                        borderRadius: 12,
                        flex: 1
                    }}>
                        <Image source={require('../assets/icons/Humidity.png')} />
                        <Text style={{ color: 'white' }}>Humidity</Text>
                        <Text style={{ color: 'white', fontSize: 25 }}>25*</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
                    <View style={{
                        gap: 10,
                        backgroundColor: Colors.baseColorGray,
                        padding: 20,
                        borderRadius: 12,
                        flex: 1
                    }}>
                        <Image source={require('../assets/icons/LightOn.png')} />
                        <Text style={{ color: 'white' }}>Light </Text>
                        <Text style={{ color: 'white', fontSize: 25 }}>25*</Text>
                    </View>
                    <View style={{
                        gap: 10,
                        backgroundColor: Colors.baseColorGray,
                        padding: 20,
                        borderRadius: 12,
                        flex: 1
                    }}>
                        <Image source={require('../assets/icons/Notification_1.png')} />
                        <Text style={{ color: 'white' }}>Suhu</Text>
                        <Text style={{ color: 'white', fontSize: 25 }}>25*</Text>
                    </View>
                </View>
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
        gap: 20
    },
    body: {
        backgroundColor: Colors.baseColorGray,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Home;
