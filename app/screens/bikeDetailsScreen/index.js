import React, { useState, useEffect } from "react";
import { Card, Divider, Layout, Text, Icon, Spinner } from "@ui-kitten/components";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image
} from "react-native";
import { globalConstants } from "../../constants";
import { globalStyles } from "../../shared/globalStyles";
import { ConfirmPaymentModal } from "../../components/Payment";
import { numberWithCommas } from "../../helpers/functions";
import { fetchBikeDetails } from "../../actions/bikes";

const BikeDetailsScreen = ( { route, navigation } ) => {
  const { bikeId } = route ? route.params ? route.params : 0 : 0,
    [ isFetchingData, setIsFetchingData ] = useState( true ),
    [ responseMessage, setResponseMessage ] = useState( null ),
    [ bikeDetails, setBikeDetails ] = useState( {} ),
    successCallback = ( data ) => {
      setBikeDetails( data );
      setIsFetchingData( false );
    },
    errorCallback = ( error ) => {
      setResponseMessage( error );
      setIsFetchingData( false );
    },
    emptyCallback = () => {
      setIsFetchingData( false );
    },
    callback = {
      success: successCallback,
      error: errorCallback,
      empty: emptyCallback
    },
    fetchDataFromServer = () => {
      setResponseMessage( null );
      setIsFetchingData( true );
      fetchBikeDetails( bikeId, callback );
    }

  useEffect( () => {
    if ( !bikeDetails || !bikeDetails.id ) {
      fetchDataFromServer();
    }
  }, [] );
  const Header = ( props ) => (
    <View {...props}>
      <Image source={{ uri: bikeDetails.image }} style={styles.thumb}></Image>

      <Divider />
      <Text category="h6" style={[ globalStyles.mb20, globalStyles.textSecondary ]}>
        {bikeDetails.name}
      </Text>
      <Text category="s1" style={globalStyles.textSmall}>
        Price: {" "}
        <Text style={[ globalStyles.textPrimary, globalStyles.textSmall ]}>
          &#8358;{numberWithCommas( bikeDetails.price_per_minute )}
        </Text>
      </Text>
      <ConfirmPaymentModal bikeId={bikeDetails.id} />
    </View>
  );

  const contentWidth = useWindowDimensions().width;
  return (
    <SafeAreaView style={{ flex: 1 }}>

      {responseMessage ? <Text style={globalStyles.textDanger}>{responseMessage}</Text> : null}

      {isFetchingData ? (
        <Card style={[ styles.itemBox, globalStyles.centerCenter, styles.loaderCard ]} level="2">
          <Spinner status="primary" size="medium" />
        </Card>
      ) :
        <>
          <ScrollView>
            <Layout style={[ globalStyles.containerPadding, globalStyles.screenBg ]}>
              <Card style={[ styles.card ]} status="warning" header={Header}>
                <Text style={[ globalStyles.textJustify ]}>
                  {bikeDetails.description}
                </Text>
              </Card>
            </Layout>
          </ScrollView>
        </>
      }


    </SafeAreaView>
  );
};
export default BikeDetailsScreen;

const styles = StyleSheet.create( {
  card: {
    marginVertical: 10
  },
  misc: {
    width: globalConstants.SCREEN_WIDTH,
    padding: 20
  },
  icon: {
    height: 10,
    width: 10
  },
  thumb: {
    marginTop: 30,
    width: "100%",
    height: 150
  },
} );
