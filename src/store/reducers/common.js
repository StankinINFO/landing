export const common = (state = {}, action) => {
    switch (action.type) {
        case 'TRIGGER_LOCALE':
            return {
                ...state,
                locale: state.locale === 'ru' ? 'en' : 'ru'
            }
        default:
            return state;
    }
};

export const initialCommon = {
    locale: 'ru',
}
