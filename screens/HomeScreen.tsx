import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import type { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unistyles Hybrid Shadow repros</Text>
      <Text style={styles.body}>
        Open the reproduction screen to exercise the crash cases directly.
      </Text>
      <Pressable
        accessibilityRole="button"
        onPress={() => navigation.navigate("Repro")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Open reproduction screen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
    color: "#444",
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#111",
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
