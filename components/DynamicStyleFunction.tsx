import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface Props {
    fullWidth: boolean;
}

export function DynamicStyleFunction({ fullWidth = false }: Props) {
    return (
        <View style={styles.repro(fullWidth)} />
    )
}

const styles = StyleSheet.create({
    repro: (fullWidth: boolean) => ({
        width: fullWidth ? 350 : undefined // crashes when fullWidth is false
    })
})