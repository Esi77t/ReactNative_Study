import styled from "styled-components";

const Container = styled.View`
    align-self: center;
    margin-bottom: 30px;
`;

const StyledImage = styled.Image`
    background-color: ${({ theme }) => theme.imageBackground };
    width: 100px;
    height: 100px;
    borderRadius: ${({ rounded }) => (rounded ? 50 : 0)}px;
`;

const Image = ({ url, imageStyle, rounded }) => {
    return(
        <Container>
            <StyledImage 
                source={{ uri: url }}
                style={ imageStyle } 
                rounded={ rounded }
            />
        </Container>
    )
}

export default Image;