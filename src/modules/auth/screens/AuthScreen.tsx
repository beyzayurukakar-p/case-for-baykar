import { useState } from 'react';
import Background from '../components/background/Background';
import SignInForm from '../components/sign-in/SignInForm';
import { SceneMap, Route, TabView } from 'react-native-tab-view';
import SignUpForm from '../components/sign-up/SignUpForm';

const renderScene = SceneMap({
  signIn: SignInForm,
  signUp: SignUpForm,
  // agreement: SignUpForm,
});

const routes: Route[] = [
  { key: 'signIn', title: '' },
  { key: 'signUp', title: '' },
  // { key: 'agreement', title: '' },
];

const renderTabBar = () => null;

const AuthScreen = () => {
  const [index, setIndex] = useState(0);

  return (
    <Background>
      <TabView
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        swipeEnabled={false}
        renderTabBar={renderTabBar}
        animationEnabled={false}
      />
    </Background>
  );
};

export default AuthScreen;
