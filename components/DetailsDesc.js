import { View, Text } from "react-native";
import React from "react";

import { COLORS, FONTS, SIZES } from "../constants";
import { NFTTitle, EthPrice } from "../components";

export const DetailsDesc = ({ data }) => {
  const [text, setText] = React.useState(data.description.slice(0, 130));
  const [readMore, setReadMore] = React.useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subtitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View>
        <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
          <Text
            style={{
              fontSize: SIZES.font,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
            }}
          >
            Description
          </Text>
          <View style={{ marginTop: SIZES.base }}>
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.regular,
                color: COLORS.secondary,
                lineHeight: SIZES.large,
              }}
            >
              {text}
              {!readMore && "..."}
              <Text
                style={{
                  fontSize: SIZES.small,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary,
                }}
                onPress={() => {
                  if (!readMore) {
                    setText(data.description);
                    setReadMore(true);
                  } else {
                    setText(data.description.slice(0, 120));
                    setReadMore(false);
                  }
                }}
              >
                {readMore ? "Show Less " : "Read More"}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
