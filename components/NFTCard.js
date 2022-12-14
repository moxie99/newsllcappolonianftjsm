import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, NFTData, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Buttons";
import { NFTTitle, SubInfo, EthPrice } from "./SubInfo";

export const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          resizeMode="cover"
          source={data.image}
          style={{
            width: "100%",
            height: "100%",
            borderTopRightRadius: SIZES.base,
            borderBottomRightRadius: SIZES.base,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.large}
          subtitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};
