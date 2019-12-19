const createAction = type => payload => ({type, payload});

export const triggerLocale = createAction('TRIGGER_LOCALE');
