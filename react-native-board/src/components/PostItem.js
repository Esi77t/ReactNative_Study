import styled from "styled-components";

const Item = styled.Pressable`
    padding: 16px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.text + '33' };
`

const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: ${({ theme }) => theme.text };
`

const Description = styled.Text`
    color: ${({ theme }) => theme.text };
    margin-top: 4px;
`

const MetaInfo = styled.Text`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 6px;
`

const MetaText = styled.Text`
    color: ${({ theme }) => theme.text };
    font-size: 12px
`

const PostItem = ({ item, onPress }) => {
    <Item onPress={() => onPress(item)}>
        <Title>{ item.title }</Title>
        <MetaInfo>
            <MetaText>작성자: { item.author }</MetaText>
            <MetaText>작성시간: { item.time }</MetaText>
            <MetaText>조회수: { item.views }</MetaText>
        </MetaInfo>
        <Description>{ item.description }</Description>
    </Item>
}

export default PostItem;