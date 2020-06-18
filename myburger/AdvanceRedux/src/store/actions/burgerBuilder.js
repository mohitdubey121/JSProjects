import * as actionTypes from './actionType'
import axios from '../../axios-orders'

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredient = (ingredient) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredient: ingredient
    }
}

export const fetchIngredientFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILED
    }
}

export const initIngredient = () => {
    return dispatch => {
        axios.get('https://react-my-burger-95b42.firebaseio.com/ingredient.json')
            .then(response => {
                dispatch(setIngredient(response.data))
            })
            .catch(error => {
                dispatch(fetchIngredientFailed())
            })
    }
}