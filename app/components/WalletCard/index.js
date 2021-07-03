import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { numberWithCommas } from "../../helpers";
import { Button, Card, Text } from "@ui-kitten/components";
import { globalStyles } from "../../shared/globalStyles";

export const WalletCard = () => {
    return ( <>
        <Card style={[ globalStyles.mt20, globalStyles.bgSecondary, styles.card ]}>
            <Text category="h5" style={[ globalStyles.textWhite, { fontWeight: 'bold' } ]}>Wallet</Text>
            <Text category="h1" style={globalStyles.textWhite}> <Text style={globalStyles.textWhite}>&#8358;</Text> {numberWithCommas( 4000 )}</Text>
            <Button size="tiny" style={[
                globalStyles.mt30,
                globalStyles.btn,
                globalStyles.bgTransparent,
                globalStyles.borderPrimary,
                styles.fundButton
            ]}>
                <Text style={{ color: '#fff' }}>Fund Wallet</Text>
            </Button>
        </Card>
    </> )
};

const styles = StyleSheet.create( {
    card: {
        paddingVertical: 10,
        height: 200,
        borderRadius: 10
    },
    fundButton: {
        justifyContent: "flex-start",
        width: '50%'
    }
} );
