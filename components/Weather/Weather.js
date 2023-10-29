import React from "react";
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55']
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#141E30', '#243B55']
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046', '#1CB5E0']
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff']
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#b79891', '#94716b']
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56ccf2', '#2f80ed']
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3e5151', '#decba4']
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b']
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56ccf2', '#2f80ed']
    },
    Clounds: {
        iconName: 'weather-cloudy',
        gradient: ['#757f9a', '#d7dde8']
    }
}

const Weather = ({ temperature, condition, name, description }) => {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temperature}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{description}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temperature: propTypes.number.isRequired,
    condition: propTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Dust', 'Clear', 'Clounds', 'Smoke', 'Haze', 'Mist']).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    temp: {
        fontSize: 42,
        textAlign: 'center',
        color: 'white'
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 40,
        alignItems: 'center'
    }
})

export default Weather;