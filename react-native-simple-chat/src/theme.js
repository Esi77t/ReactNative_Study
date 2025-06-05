// 프로젝트에서 사용할 색을 관리
const colors = {
    white: '#fff',
    black: '#000',
    grey_01: '#d5d5d5',
    grey_02: '#a6a6a6',
    red: '#c6161d',
    blue: '#6699ff',
}

export const theme = {
    // 배경색
    background: colors.white,

    // 글자색
    text: colors.black,

    // 이미지 없을 때 출력할 색
    imageBackground: colors.grey_01,
    imageButtonBackground: colors.grey_01,
    imageButtonIcon: colors.white,

    // Input 관련
    label: colors.grey_02,
    inputPlaceholder: colors.grey_02,
    inputBorder: colors.grey_02,
    errorText: colors.red,

    // 버튼 관련
    buttonBackground: colors.blue,
    buttonTitle: colors.white,
    buttonUnFilledTitle: colors.blue,
    headerTintColor: colors.black,

    // Spinner 관련
    spinnerBackground: colors.black,
    spinnerIndicator: colors.white,
}