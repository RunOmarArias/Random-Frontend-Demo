import {
    StyledLogin,
    StyledTitle,
    StyledTitleOne,
    StyledTitleTwo,
    StyledForm,
    StyledFormPoint,
    StyledLabel,
    StyledFormInput,
    StyledFormForgotten,
    StyledSubmitButton
} from '../../../styles';

export default function Login() {
    return (
        <StyledLogin>
            <StyledTitle>
                <StyledTitleOne>Iniciar</StyledTitleOne>
                <StyledTitleTwo> sesión</StyledTitleTwo>
            </StyledTitle>
            <StyledForm>
                <StyledFormPoint>
                    <StyledLabel>Nombre</StyledLabel>
                    <StyledFormInput type='text' />
                </StyledFormPoint>
                <StyledFormPoint>
                <StyledLabel>Contraseña</StyledLabel>
                    <StyledFormInput type='password' />
                </StyledFormPoint>
            <StyledFormForgotten>
                Olvidé mi contraseña
            </StyledFormForgotten>
            <StyledSubmitButton>Entrar</StyledSubmitButton>
            </StyledForm>
        </StyledLogin>
    );
}
