import styled from 'styled-components';

export const TabsNavWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    height: auto;
    min-height: 150px;
    background: #003777;
    border-top: 1px solid #4488D5;
`;

export const TabsNav = styled.ul`
    width: 40%;
    margin: 0 auto 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 2rem;
    padding-left: 0px;
    position: relative;
    bottom: 43px;

    > li {
        width: 50%;
        background-color: #4488D5;
        color: #ffffff;
        padding: 10px;
        list-style: none;
        text-align: center;
        cursor: pointer;
        transition: all 0.7s;
        border: 1px solid #4488D5;
        border-top-left-radius: 1px;
        border-top-left-radius: 1px;
    }

    .active {
        background-color: #003777;
        border-bottom: none;
    }

    @media (max-width: 700px) {
        width: 90%;
    }

`;