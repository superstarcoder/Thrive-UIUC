import { StyleSheet, Text, View } from 'react-native'
import React, { startTransition } from 'react'
import ContinueButton from './ContinueButton'
import { StyledH1, StyledH2 } from "../sharedComponents/Text/StyledText";
import sharedStyles from "../../styles/SharedStyles";

type Props = {
    navigation: any
}

const AuthPage = (props: Props) => {
  const { navigation } = props;
  console.log(props)
  return (
    <View style={[sharedStyles.pageContainer, styles.authPage]}>
        <StyledH1 text={"Create Your Profile!"}/>
        <ContinueButton onPress={() => navigation.navigate('home-page')}/>
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