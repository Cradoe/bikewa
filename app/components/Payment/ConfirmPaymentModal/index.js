import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Modal, Text, Icon, Spinner } from "@ui-kitten/components";
import { globalStyles } from "../../../shared/globalStyles";
import { globalConstants } from "../../../constants";
import { fetchBikeDetails } from "../../../actions/bikes";

const navigateIcon = ( props ) => (
  <Icon {...props} name="navigation-2-outline" />
);
export const ConfirmPaymentModal = ( { bikeId } ) => {
  const [ visible, setVisible ] = useState( false ),
    [ hasMadeBooking, setHasMadeBooking ] = useState( false ),
    [ isProcessing, setIsProcessing ] = useState( true ),
    [ responseMessage, setResponseMessage ] = useState( null ),
    [ bikeDetails, setBikeDetails ] = useState( {} ),
    successCallback = ( data ) => {
      setBikeDetails( data );
      setHasMadeBooking( true );
      setIsProcessing( false );
    },
    errorCallback = ( error ) => {
      setResponseMessage( error );
      setIsProcessing( false );
    },
    emptyCallback = () => {
      setIsProcessing( false );
    },
    callback = {
      success: successCallback,
      error: errorCallback,
      empty: emptyCallback
    },
    processPayment = () => {
      setResponseMessage( null );
      fetchBikeDetails( bikeId, callback );
    }

  useEffect( () => {
    if ( !hasMadeBooking ) {
      processPayment();
    }
  }, [] );
  return (
    <>
      <Button
        accessoryRight={navigateIcon} onPress={() => setVisible( true )}
        status="primary"
        appearance="outline"
        size="tiny">
        <Text style={globalStyles.textSmall}>Book Bike</Text>
      </Button>

      <Modal visible={visible} backdropStyle={styles.backdrop}>
        <Card disabled={true} style={styles.commentForm}>
          {isProcessing ? (
            <View>
              <Text category="s1">Processing...</Text>
              <View style={[ styles.spinnerContainer, globalStyles.centerCenter, globalStyles.flexRow ]}>
                <Spinner size='giant' />
              </View>
            </View>
          ) : null}
          {responseMessage ? <Text style={globalStyles.textDanger}>{responseMessage}</Text> : null}
          {
            hasMadeBooking ? (
              <>

                <View>
                  <Text category="s1">Bike Unlocked Successfully.</Text>
                  <Text category="s2" style={[ globalStyles.textCenter, globalStyles.mt40 ]}>Access Code: 3weuhu</Text>
                  <Text category="h3" style={[ globalStyles.textCenter ]}>3weuhu</Text>
                </View>
                <View style={[ globalStyles.flexRow, globalStyles.justifyCenter, globalStyles.mt20 ]}>
                  <Button
                    onPress={() => setVisible( false )}
                    status="success"
                    style={{ marginRight: 15 }}
                  >
                    <Text>
                      <Icon
                        style={styles.icon}
                        fill="#000"
                        name='checkmark-circle-outline'
                      />
                    </Text>
                  </Button>
                </View>
              </> ) : null
          }

        </Card>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create( {
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  icon: {
    height: 25,
    width: 25
  },
  commentForm: {
    width: ( 90 / 100 ) * globalConstants.SCREEN_WIDTH
  },
  spinnerContainer: {
    minHeight: 80
  }
} );
