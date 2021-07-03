import React from "react";
import { Layout, Button } from "@ui-kitten/components";
import { SafeAreaView } from "react-native";
import { globalConstants } from "../../constants";
import { Header } from "../../components/Header/"
import { TopBikes } from "../../components/TopBikes/"
import { globalStyles } from "../../shared/globalStyles";
import { WalletCard } from "../../components/WalletCard";

const DashboardScreen = ( { navigation, route } ) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={[
          globalStyles.containerPadding,
          globalStyles.screenBg,
          { height: globalConstants.SCREEN_HEIGHT }
        ]}
      >
        <WalletCard />
        <TopBikes
          categoryId={route.params ? route.params.id : 1}
          navigation={navigation}
        />
        <Button style={[ globalStyles.bgPrimary, globalStyles.borderPrimary, globalStyles.mt20 ]}> Scan Qcode</Button>
      </Layout>
    </SafeAreaView>
  );
};
export default DashboardScreen;
