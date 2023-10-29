import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text>Getting the weather...</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 40
    }
});

export default Loading;