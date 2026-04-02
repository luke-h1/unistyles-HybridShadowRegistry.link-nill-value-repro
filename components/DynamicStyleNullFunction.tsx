import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface DynamicStyleNullFunctionProps {
    backgroundColor: string | null;
}

export function DynamicStyleNullFunction({
    backgroundColor,
}: DynamicStyleNullFunctionProps) {
    // @ts-ignore
    return <View style={styles.background(backgroundColor)} />;
}

const styles = StyleSheet.create({
    // @ts-ignore
    background: (
        backgroundColor: DynamicStyleNullFunctionProps["backgroundColor"],
    ) => ({
        backgroundColor,
    }),
});
