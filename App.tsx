import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './src/styles/global.css';
import { Login } from '@/screens/Login';

export default function App() {
  return (
    <Login />
  );
}
