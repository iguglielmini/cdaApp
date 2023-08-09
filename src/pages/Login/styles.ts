import {theme} from '@/styles';
import {ImageBackground, Text, View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(ImageBackground)`
  flex: 1;
  padding: 24px;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled(View)`
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  font-weight: ${theme.fonts.fontBold};
  font-family: ${theme.fonts.fontNormal};
  color: ${theme.colors.common.WHITE};
`;

export const SubTitle = styled(Text)`
  font-size: 21px;
  padding-top: 8px;
  padding-bottom: 24px;
  line-height: 24px;
  text-align: center;
  font-weight: ${theme.fonts.normal};
  font-family: ${theme.fonts.fontNormal};
  color: ${theme.colors.common.WHITE};
`;

export const Section = styled(View)`
  width: 100%;
  max-width: 259px;
  align-items: center;
  justify-content: center;
  padding-bottom: 32px;
`;
