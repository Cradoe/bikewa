import React from "react";
import { Layout, Button } from "@ui-kitten/components";
import { SafeAreaView, ScrollView } from "react-native";
import { TopBikes } from "../../components/TopBikes/"
import { globalStyles } from "../../shared/globalStyles";
import { WalletCard } from "../../components/WalletCard";
import { PaymentHistory } from "../../components/PaymentHistory";

const DashboardScreen = ( { navigation, route } ) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={[
          globalStyles.screenBg,
        ]}
      >
        <ScrollView style={[ globalStyles.mb20,
        globalStyles.containerPadding ]}>
          <WalletCard />

          <TopBikes
            navigation={navigation}
          />
          <PaymentHistory
            navigation={navigation} />
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};
export default DashboardScreen;
