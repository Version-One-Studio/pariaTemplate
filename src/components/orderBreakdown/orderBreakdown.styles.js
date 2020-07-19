import styled from 'styled-components';

export const Container = styled.section`
    max-width: 550px;
    grid-column: 2/4;
    @media (max-width: 750px) {
        width: 100%;
        margin: 0;
    }
`;

export const OrderTotalBreakdown = styled.div`
    margin-top: 25px;
    margin-bottom: 30px;
`;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${props => props.last ? '20px' : '5px'};
`;
export const Label = styled.p`
    margin: 0;
    font-size: 22px;
    font-weight: ${props => props.total ? 500 : 'normal'};
    font-family: "Avenir Next";
    font-weight: 600;
`;

export const WipayLoaderContainer = styled.div`
position: absolute;
grid-column: 1/4;
justify-self: center;
width: 100vw;
height: 100%;
background-color: rgba(255, 255, 255, 0.8);
`;