import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import profile from '../../assets/profile.png';
import like from '../../assets/like.png';
import buy from '../../assets/currentBuy.png';
import arrow from '../../assets/arrowDown.png';
import { useState } from 'react';

import {
    StyledHeader,
    StyledLogo,
    StyledSlogan,
    StyledSloganContainer,
    StyledHeaderMain,
    StyledButtons,
    StyledButton,
    StyledButtonContainer,
    StyledNav,
    StyledNavButton,
    StyledButtonArrow,
    StyledBadgeCount,
} from '../styles';

export default function Header() {
    const [badgeLike, setBadgeLike] = useState(2);
    const [badgeBuy, setBadgeBuy] = useState(3);

    return (
        <StyledHeader>
            <StyledSloganContainer>
                <StyledSlogan>Envíos a todo México</StyledSlogan>
            </StyledSloganContainer>
            <StyledHeaderMain>
                <StyledLogo src={logo} alt='punto-arte' />
                <StyledButtons>
                    <StyledButtonContainer>
                        <StyledButton>Obras</StyledButton>
                        <StyledButtonArrow type='image' src={arrow} alt='arrow' />
                    </StyledButtonContainer>
                    <StyledButtonContainer>
                        <StyledButton>Artistas</StyledButton>
                        <StyledButtonArrow type='image' src={arrow} alt='arrow' />
                    </StyledButtonContainer>
                </StyledButtons>
                <StyledNav>
                    <div>
                        <StyledNavButton
                            type='image'
                            src={search}
                            alt='search'
                        />
                    </div>
                    <div>
                        <StyledNavButton
                            type='image'
                            src={profile}
                            alt='profile'
                        />
                    </div>
                    <div>
                        <StyledNavButton
                            type='image'
                            src={like}
                            alt='like'
                            onClick={() => {
                                setBadgeLike(badgeLike + 1);
                            }}
                        />
                        {
                            badgeLike === 0 ?
                                <StyledBadgeCount></StyledBadgeCount>
                                :
                                <StyledBadgeCount>{badgeLike}</StyledBadgeCount>
                        }
                    </div>
                    <div>
                        <StyledNavButton
                            type='image'
                            src={buy}
                            alt='current-buy'
                            onClick={() => {
                                setBadgeBuy(badgeBuy + 1);
                            }}
                        />
                        {
                            badgeBuy === 0 ?
                                <StyledBadgeCount></StyledBadgeCount>
                                :
                                <StyledBadgeCount>{badgeBuy}</StyledBadgeCount>
                        }
                    </div>
                </StyledNav>
            </StyledHeaderMain>
        </StyledHeader>
    );
}
