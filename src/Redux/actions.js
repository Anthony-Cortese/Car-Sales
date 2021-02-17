export const ADD_FEATURES = "ADD_FEATURES"

export const addFeatures = (features) => {
    return ({
        type: ADD_FEATURES,
        payload: features
    })
}