import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { WebView } from "react-native-webview";
import Store from "./model.js";
import { observer } from "mobx-react-lite";
//import Constants from "expo-constants";

export default function App() {
  const myStore = new Store();
  let [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function authenticate() {
      const result = await LocalAuthentication.authenticateAsync();
      setIsAuthenticated(result.success);
    }
    authenticate();
  }, []);

  if (isAuthenticated)
    return (
      <>
        <StatusBar backgroundColor="white" />
        <WebView
          style={styles.container}
          originWhitelist={["*"]}
          source={{ uri: "https://ssu.scriptsure.com" }}
        ></WebView>
      </>
    );
  else
    return (
      <View style={styles.container}>
        <Text>Error Aunthenticating</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
