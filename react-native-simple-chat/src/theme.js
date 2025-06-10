// 프로젝트에서 사용할 색을 관리
const colors = {
    white: '#fff',
    black: '#000',
    grey_0: '#d5d5d5',
    grey_1: '#a6a6a6',
    red: '#c6161d',
    blue: '#6699ff',
}

export const theme = {
    // 배경색
    background: colors.white,

    // 글자색
    text: colors.black,

    // 이미지 없을 때 출력할 색
    imageBackground: colors.grey_0,
    imageButtonBackground: colors.grey_0,
    imageButtonIcon: colors.white,

    // Input 관련
    label: colors.grey_1,
    inputPlaceholder: colors.grey_1,
    inputBorder: colors.grey_1,
    inputDisableBackground: colors.grey_0,
    errorText: colors.red,

    // 버튼 관련
    buttonBackground: colors.blue,
    buttonTitle: colors.white,
    buttonUnFilledTitle: colors.blue,
    headerTintColor: colors.black,
    buttonLogout: colors.red,

    // Spinner 관련
    spinnerBackground: colors.black,
    spinnerIndicator: colors.white,

    // Tab 관련
    tabActiveColor: colors.blue,
    tabInactiveColor: colors.grey_1,
}