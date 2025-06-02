import styled from "styled-components";

const Container = styled.View`
    align-self: center;
    margin-bottom: 30px;
`;

const StyledImage = styled.Image.attrs(({ imageStyle }) => ({
    style: imageStyle,
}))`
    background-color: ${({ theme }) => theme.imageBackground };
    width: 100px;
    height: 100px;
`;

const Image = ({ imageStyle }) => {
    return(
        <Container>
            <StyledImage source={{ uri: 'https://i.namu.wiki/i/VOXnTntHPJ41TX7xh__s-dnZHNhO1JYYQ2KhJLBRjmXE5e2kYXCObkw9E6XeSFvc7w-3mE1z6BLido2HtIFo_Q.webp' }} style={ imageStyle } />
        </Container>
    )
}

export default Image;