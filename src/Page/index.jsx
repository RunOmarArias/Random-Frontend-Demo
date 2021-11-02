import Header from './Header/index';
import Main from './Main';
import Aside from './Aside';
import { StyledPageContainer, StyledPageMain } from './styles';

export default function Page() {
    return(
        <div>
            <Header />
            <StyledPageContainer>
                <StyledPageMain>
                    <Main />
                </StyledPageMain>
                <Aside />
            </StyledPageContainer>
        </div>
    )
}