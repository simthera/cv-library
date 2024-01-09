import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 30%;
    margin: 0 auto;
    padding-top: 80px;

    @media (max-width: 700px) {
        width: 70%;
    }

    img {
        @media (max-width: 700px) {
            max-width: 100%;
        }
    }
`;
