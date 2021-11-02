import {
    StyledSigin,
    StyledTitle,
    StyledTitleOne,
    StyledTitleTwo,
    StyledSiginSection,
    StyledContainer,
    StyledSiginImage,
    StyledLorem,
    StyledForm,
    StyledFormPoint,
    StyledLabel,
    StyledFormInput,
    StyledSubmitButton,
    StyledTerms,
    StyledLegal,
    StyledFormPointRow,
    StyledVerticalLine,
    StyledAplyImage,
    StyledPinkButton,
} from '../../../styles';

import purpleSearch from '../../../../assets/purpleSearch.png';
import purplePaint from '../../../../assets/purplePaint.png';

export default function Sigin() {
    return (
        <StyledSigin>
            <StyledTitle>
                <StyledTitleOne>Crear</StyledTitleOne>
                <StyledTitleTwo> cuenta</StyledTitleTwo>
            </StyledTitle>
            <StyledSiginSection>
                <StyledContainer>

                    <StyledSiginImage src={purpleSearch} alt='purpleSearch' />
                    <StyledTitle>
                        <StyledTitleOne>Soy</StyledTitleOne>
                        <StyledTitleTwo> coleccionista</StyledTitleTwo>
                    </StyledTitle>
                    <StyledLorem>
                        Crea una cuenta para comprar y<br/>
                        conocer las obras de diferentes<br/>
                        artistas.
                    </StyledLorem>

                    <StyledForm>
                        <StyledFormPoint>
                            <StyledLabel>Nombre completo</StyledLabel>
                            <StyledFormInput type='text' />
                        </StyledFormPoint>
                        <StyledFormPoint>
                            <StyledLabel>Tu correo</StyledLabel>
                            <StyledFormInput type='email' />
                        </StyledFormPoint>
                        <StyledFormPoint>
                            <StyledLabel>Contraseña</StyledLabel>
                            <StyledFormInput type='password' />
                        </StyledFormPoint>
                        <StyledFormPoint>
                            <StyledLabel>Repetir contraseña</StyledLabel>
                            <StyledFormInput type='password' />
                        </StyledFormPoint>
                        <StyledTerms>
                            <StyledFormPointRow>
                                <input type='checkbox' />
                                <StyledLabel>
                                    Al registrarme, acepto las <StyledLegal href='/'> Políticas de<br/> 
                                    privacidad</StyledLegal> y los <StyledLegal href='/'>Términos y Condiciones</StyledLegal>.
                                </StyledLabel>
                            </StyledFormPointRow>
                        </StyledTerms>    
                        <StyledSubmitButton>Crear cuenta</StyledSubmitButton>
                    </StyledForm>

                </StyledContainer>
                <StyledVerticalLine></StyledVerticalLine>
                
                <StyledContainer>

                    <StyledAplyImage src={purplePaint} alt='Aplicar' />
                    <StyledTitle>
                        <StyledTitleOne>Soy</StyledTitleOne>
                        <StyledTitleTwo> artista</StyledTitleTwo>
                    </StyledTitle>
                    <StyledLorem>
                        Crea una cuenta para mostrar tus<br/>
                        trabajos y darte a conocer<br/>
                        como un artista.
                    </StyledLorem>
                    <StyledPinkButton>Aplicar ahora</StyledPinkButton>

                </StyledContainer>
            </StyledSiginSection>
        </StyledSigin>
    );
}
