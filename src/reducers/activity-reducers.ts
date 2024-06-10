import { Activity } from "../types"

export type ActivityActions = 
{ type: 'save-activity', payload: {newActivity: Activity}}

type ActivityState = { 
    activties : Activity[]
}

export const initialState : ActivityState = {
    activties : []
}

export const activityReducer = (
        state : ActivityState = initialState,
        action: ActivityActions
    )=>{
    
    if (action.type === 'save-activity'){
        // Este código maneja la logica para actualizar el estado
        console.log("actualizando el estado");
        
    }
}