
export const CHANGE_LANGUAGE = "change_language";

export const ADD_LANGUAGE = "add_new";

interface AddLanguageActionType {
    type: typeof ADD_LANGUAGE
    payload: {code: string, name: string}
}

interface ChnageLanguageActionType {
    type: typeof CHANGE_LANGUAGE
    payload: "zh" | "en"
} 

export type LanguageActionType = AddLanguageActionType | ChnageLanguageActionType

export const addLanguageActionCreator = (code: string, name: string) : AddLanguageActionType => {
    return {
        type: ADD_LANGUAGE,
        payload: {
            code: code, name: name
        }
    }
}

export const changeLanguageActionCreator = (languageCode: "zh" | "en") : ChnageLanguageActionType => {
    return {
        type: CHANGE_LANGUAGE,
        payload: languageCode
    }
}
