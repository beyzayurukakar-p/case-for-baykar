import { PropsWithChildren } from 'react';
import { ImageBackground, View } from 'react-native';
import { imageSources } from '../../assets';
import { createStyles } from './Background.styles';
import { useThemedStyles } from '../../../../core/colorScheme';

const Background = (props: PropsWithChildren<{}>) => {
  const styles = useThemedStyles(createStyles);
  return (
    <ImageBackground style={styles.container} source={imageSources.background()}>
      <View style={styles.innerContainer}>
        <View style={styles.contentContainer}>{props.children}</View>
      </View>
    </ImageBackground>
  );
};

export default Background;
