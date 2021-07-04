import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { numberWithCommas } from "../../helpers";
import { Button, Card, Text, Icon } from "@ui-kitten/components";
import { globalStyles } from "../../shared/globalStyles";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import { globalConstants } from "../../constants";

export const WalletCard = () => {

    const pulseIconRef = React.useRef();

    useEffect( () => {
        pulseIconRef.current.startAnimation()
    }, [] )
    return ( <>
        <Card style={[ globalStyles.mt20, globalStyles.bgSecondary, styles.card ]}>
            <TouchableWithoutFeedback style={[
                styles.fundButton,
                globalStyles.centerCenter
            ]} onPress={() => { }}>
                <Icon fill='#fff' name="plus-circle-outline"
                    animation='pulse'
                    ref={pulseIconRef}
                    animationConfig={{ cycles: Infinity }}
                    style={[ styles.topUpIcon ]} />
            </TouchableWithoutFeedback>
            <View>
                <Text category="h5" style={[ globalStyles.textWhite, { fontWeight: 'bold' } ]}>Wallet Balance</Text>
                <Text category="h1" style={[ globalStyles.textWhite, globalStyles.textBold ]}> <Text style={globalStyles.textWhite}>&#8358;</Text> {numberWithCommas( 4000 )}</Text>
                <Text category="label" appearance='hint' style={styles.hint}><Icon fill='#fff' name="shield-outline" style={styles.icon} /> secured with flutterwave</Text>
            </View>


        </Card>
    </> )
};

const styles = StyleSheet.create( {
    card: {
        paddingVertical: 10,
        height: 150,
        borderRadius: 10,
        position: 'relative'
    },
    fundButton: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: globalConstants.PRIMARY_COLOR,
        borderWidth: 1,
        position: 'absolute',
        right: 10
    },
    topUpIcon: {
        height: 30,
        width: 30,
    },
    icon: {
        height: 10,
        width: 10
    },
    hint: {
        fontSize: 10
    }
} );
