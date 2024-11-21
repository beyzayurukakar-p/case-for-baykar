import { PropsWithChildren, useEffect, useState } from 'react';
import { ImageBackground, Keyboard, View } from 'react-native';
import { imageSources } from '../../../../common/assets/images';
import {
  CONTENT_HEIGHT_FOR_KEYBOARD,
  CONTENT_NORMAL_HEIGHT,
  createStyles,
} from './Background.styles';
import { useThemedStyles } from '../../../../core/colorScheme';

const Background = (props: PropsWithChildren<{}>) => {
  const styles = useThemedStyles(createStyles);
  const [contentHeight, setContentHeight] = useState<number>(CONTENT_NORMAL_HEIGHT);

  useEffect(() => {
    const subscription = Keyboard.addListener('keyboardDidShow', () => {
      setContentHeight(CONTENT_HEIGHT_FOR_KEYBOARD);
    });
    return () => {
      subscription.remove();
    };
  }, []);
  useEffect(() => {
    const subscription = Keyboard.addListener('keyboardDidHide', () => {
      setContentHeight(CONTENT_NORMAL_HEIGHT);
    });
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      source={imageSources.background()}
    >
      <View style={styles.innerContainer}>
        <View
          style={[
            styles.contentContainer,
            {
              height: contentHeight,
            },
          ]}
        >
          {props.children}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Background;
