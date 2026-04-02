import { StyleSheet } from "react-native-unistyles";

interface DynamicStyleNullFunctionProps {
    backgroundColor: string | null;
}

export function DynamicStyleNullFunction({
    backgroundColor,
}: DynamicStyleNullFunctionProps) {
    // return <View style={styles.background(backgroundColor)} />;
    return null
}

const styles = StyleSheet.create({
    // @ts-ignore
    background: (
        backgroundColor: DynamicStyleNullFunctionProps["backgroundColor"],
    ) => ({
        backgroundColor,
    }),
});
