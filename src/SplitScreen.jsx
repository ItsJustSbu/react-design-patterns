import styled from 'styled-components'

const Container = styled.div`
    display:flex;
`;

const Pane = styled.div`
    flex:${props=>props.weight};
`;

function SplitScreen({children, LeftWeight=1,RightWeight =1}){

        //instead of passing in components as props, we can define them as children
        const [left, right] = children;
        return(
            <Container>
                <Pane weight={LeftWeight}>
                    {left}
                </Pane>
                <Pane  weight={RightWeight}>
                    {right}
                </Pane>

            </Container>
        )
}

export default SplitScreen;