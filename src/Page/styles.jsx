import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledLorem = styled.div`
    color: #606060;
    font-weight: bolder;
    font-size: 12px;
    margin-bottom: 20px;
`;

//Page styles

//Page

export const StyledPageContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledPageMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 95%;
`;

//Page Header

export const StyledHeader = styled.header`
    background-color: #1D1528;
    color: white;
    padding-top: 10px;
`;

export const StyledLogo = styled.img`
    width: 200px;
    @media (max-width: 699px) {
        margin: 10px;
    }
`;

export const StyledSlogan = styled.p`
    margin-top: 0;
    font-size: smaller;
`
export const StyledSloganContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledHeaderMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
    @media (max-width: 699px) {
        flex-direction: column;
        padding: 20px 0;
    }
`;

export const StyledButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-right: 50px;
    
    @media (max-width: 699px) {
        margin: 15px 0;
        padding-right: 0px;
    }
`;

export const StyledButtonContainer = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const StyledButton = styled.button`
    color: white;
    border: none;
    outline: none;
    background-color: #1D1528;
    font-weight: bold;
    font-size: large;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
`;

export const StyledNav = styled.nav`
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const StyledNavButton = styled.input`
    width: 16px;
`;

export const StyledButtonArrow = styled.input`
    width: 16px;
    color: white;
`;

export const StyledBadgeCount = styled.span`
    color: #E03BE0;
    font-size: 11px;
    margin-left: 0.5px;
`;

//Page Main

export const StyledHr = styled.hr`
    width: 75%;
    border: 0.2px ridge #E0E0E0;
    outline: none;
`;

//Page Main Login

export const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 35px;
`;

export const StyledTitle = styled.div`
    margin: 35px 0;
`;

export const StyledTitleOne = styled.span`
    font-weight: lighter;
    font-size: 20px;
    color: #606060;
`;

export const StyledTitleTwo = styled.span`
    font-weight: bolder;
    font-size: 20px;
    color: #606060;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledFormPoint = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const StyledTerms = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const StyledLegal = styled.a`
    color: #E03BE0;
`;

export const StyledFormPointRow = styled.label`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
`;

export const StyledLabel = styled.span`
    color: #606060;
    font-weight: bolder;
    font-size: 12px;
    padding-left: 10px;
    margin: 4px 0;
`;

export const StyledFormInput = styled.input`
    border: 1.8px solid #D8D8D8;
    margin: 2px;
    padding: 8px 45px;
    outline: none;
    font-size: 15px;
`;

export const StyledFormForgotten = styled.button`
    color: #E03BE0;
    border: none;
    outline: none;
    background-color: white;
    font-weight: bold;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 2px;
    :hover {
        text-decoration: underline;
    }
`;

export const StyledSubmitButton = styled.button`
    background-color: #E03BE0;
    color: white;
    outline: none;
    border: none;
    font-size: 15px;
    margin-top: 5px;
    padding: 15px 90px;
    cursor: pointer;
`;

export const StyledPinkButton = styled.button`
    background-color: #E03BE0;
    color: white;
    outline: none;
    border: none;
    font-size: 15px;
    margin-top: 5px;
    padding: 15px 90px;
    cursor: pointer;
`;

export const StyledSigin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 35px;
`;

export const StyledSiginSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
    @media (max-width: 699px) {
        flex-direction: column;
    }
`;

export const StyledSiginImage = styled.img`
    width: 78px;
`;

export const StyledAplyImage = styled.img`
    width: 51px;
`;

export const StyledVerticalLine = styled.div`
    height: 500px;
    border-left: 0.2px ridge #E0E0E0;
    outline: none;
    
    @media (max-width: 699px) {
        height: 1px;
        border: 1px ridge #E0E0E0;
        width: 80%;
        outline: none;
        margin: 20px 0;
    }
`;

// Page Aside

export const StyledAside = styled.aside`
    margin: 15px 12px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 599px) {
        display: none;
    }
`;

export const StyledIconDraco = styled.img`
    width: 70px;
`;

export const StyledIconSocial = styled.img`
    width: 15px;
    margin: 2px 0;
    color: #606060;;
`;

export const StyledContactUs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledConstactUsWord = styled.span`
    transform: rotate(270deg);
    margin: 45px 0;
    color: #606060;
    font-size: 13px;
`;