import 'styled-components';

import {theme} from '@/styles';

declare module '*.png';
declare module '*.jpeg';
declare module '*.json';

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'styled-components/native' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
