import { StyleSheet, Text, View } from 'react-native'
import React, { startTransition } from 'react'
import ContinueButton from './ContinueButton'
import { StyledH1, StyledH2 } from "../sharedComponents/Text/StyledText";
import sharedStyles from "../../styles/SharedStyles";

type Props = {}

const AuthPage = (props: Props) => {
  return (
    <View style={[sharedStyles.pageContainer, styles.authPage]}>
        <StyledH1 text={"Create Your Profile!"}/>
        <ContinueButton />
    </View>
  )
}

export default AuthPage

const styles = StyleSheet.create({
  authPage: {
    alignItems: "center",
    gap: 20,
  }
})