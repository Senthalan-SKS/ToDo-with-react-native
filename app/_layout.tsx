import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function RootLayout() {
  return(
  <Stack>
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="Home" />
      </Stack>
    </SafeAreaProvider>


  </Stack>)
}
