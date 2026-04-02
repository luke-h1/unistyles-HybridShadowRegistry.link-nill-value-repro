import { StyleSheet } from "react-native-unistyles";

interface UndefinedVariantFunctionProps {
    isHero?: boolean;
}

export function UndefinedVariantFunction({
    isHero,
}: UndefinedVariantFunctionProps) {
    // // @ts-ignore
    // styles.useVariants(isHero);

    // return (
    //     // @ts-ignore
    //     <View style={styles.container} />
    // );
    return null
}

const styles = StyleSheet.create({
    container: {
        variants: {
            isHero: {
                true: {
                    color: "blue",
                },
                false: {
                    color: undefined, // crashes when isHero is falsy
                },
            },
        },
    },
});
