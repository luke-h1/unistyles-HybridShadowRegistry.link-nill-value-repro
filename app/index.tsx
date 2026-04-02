import { DynamicStyleFunction } from "@/components/DynamicStyleFunction";
import { DynamicStyleNullFunction } from "@/components/DynamicStyleNullFunction";
import { UndefinedVariantFunction } from "@/components/UndefinedVariantFunction";
import { View } from "react-native";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <DynamicStyleNullFunction backgroundColor={null} />
      <DynamicStyleFunction fullWidth={false} />
      <UndefinedVariantFunction />
    </View>
  );
}


