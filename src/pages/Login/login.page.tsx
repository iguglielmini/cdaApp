import React, {useState, useCallback} from 'react';

import BgImage from '@/assets/img/bg-login.png';
import * as S from './styles';

interface ILoginForm {
  cpf: string | undefined;
  password: string | undefined;
}

const LoginPage: React.FC = () => {
  const [form, setForm] = useState<ILoginForm>({} as ILoginForm);

  const handleSubmit = useCallback(() => {}, [form]);

  return (
    <S.Container source={BgImage} resizeMode="cover">
      <S.Content>{/* <Logo /> */}</S.Content>

      <S.Section>
        <S.Title>Conecte-se e fique por dentro da cidade Malta</S.Title>
        <S.SubTitle>
          Viva aventuras, desafie-se e crie sua própria historia
        </S.SubTitle>
      </S.Section>
    </S.Container>
  );
};

export default LoginPage;
