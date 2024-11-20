import { useState } from 'react';
import Background from '../components/background/Background';
import SignInForm from '../components/sign-in/SignInForm';
import { SceneMap, Route, TabView } from 'react-native-tab-view';
import SignUpForm from '../components/sign-up/SignUpForm';
import SignUpAgreement from '../components/sign-up/SignUpAgreement';
import { SignUpFormContext, SignUpFormData } from '../store/signUpFormContext';

const renderScene = SceneMap({
  signIn: SignInForm,
  signUp: SignUpForm,
  agreement: SignUpAgreement,
});

const routes: Route[] = [
  { key: 'signIn', title: '' },
  { key: 'signUp', title: '' },
  { key: 'agreement', title: '' },
];

const renderTabBar = () => null;

const AuthScreen = () => {
  const [index, setIndex] = useState(0);
  const [signUpFormData, setSignUpFormData] = useState<SignUpFormData>(null);

  return (
    <Background>
      <SignUpFormContext.Provider
        value={{
          value: signUpFormData,
          setValue: setSignUpFormData,
        }}
      >
        <TabView
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          swipeEnabled={false}
          renderTabBar={renderTabBar}
          animationEnabled={false}
        />
      </SignUpFormContext.Provider>
    </Background>
  );
};

export default AuthScreen;
