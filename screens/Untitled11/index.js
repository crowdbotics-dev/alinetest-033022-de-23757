import { TextInput } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled11 = () => {
  const user = useSelector(state => state.user);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.ZYcgOyVk}>Test</Text><TextInput style={styles.mmwDZddU} value="Test"></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  ZYcgOyVk: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  mmwDZddU: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 200,
    height: 30
  },
  GjNYixem: {
    width: 150,
    height: 40
  }
});
export default Untitled11;