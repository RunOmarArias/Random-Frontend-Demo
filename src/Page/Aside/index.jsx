import {
    StyledAside,
    StyledIconDraco,
    StyledIconSocial,
    StyledContactUs,
    StyledConstactUsWord,
} from '../styles';
import purpleDraco from '../../assets/purpleDraco.png';
import logoInstagram from '../../assets/logoInsta.png';
import logoFacebook from '../../assets/logoFacebook.png';
import logoWhatsapp from '../../assets/LogoWhatsapp.png';
import ScrollSpy from './components/ScrollSpy';

export default function Aside() {
    return (
        <StyledAside>
            <StyledIconDraco src={purpleDraco} alt='Logo' />
            <ScrollSpy />
            <StyledContactUs>
                <StyledConstactUsWord>contáctanos</StyledConstactUsWord>
                <a href='/'>
                    <StyledIconSocial src={logoInstagram} alt='Instagram' />
                </a>
                <a href='/'>
                    <StyledIconSocial src={logoWhatsapp} alt='Whatsapp' />
                </a>
                <a href='/'>
                    <StyledIconSocial src={logoFacebook} alt='Facebook' />
                </a>
            </StyledContactUs>
        </StyledAside>
    );
}
