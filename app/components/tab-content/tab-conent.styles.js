import styled from 'styled-components';

export const TabContentWrapper = styled.div`
    width: 40%;
    margin: 0 auto;
    display: flex;
    color: #ffffff;
    padding-bottom: 20px;

    ul {
        width: 50%;

        > li {
            list-style-type: none;
            line-height: 1.5;
            font-size: 16px;
        }
    }

    @media (max-width: 700px) {
        width: 90%;
    }
`; 
