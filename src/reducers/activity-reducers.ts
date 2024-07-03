import { Activity } from "../types"

export type ActivityActions = 
{ type: 'save-activity', payload: {newActivity: Activity}} |
{ type: 'edit-activity', payload: {id: Activity['id']}} |
{ type: 'delete-activity', payload: {id: Activity['id']}} 

type ActivityState = { 
    activities : Activity[],
    activeId: Activity['id']
}

export const initialState : ActivityState = {
    activities : [{
    id : "99bba929-629c-4850-8a34-6497924a4e13",
    category: 1,
    name: 'Trotar',
    calories: 100
    }
    ],
    activeId:''
}

export const activityReducer = (
        state : ActivityState = initialState,
        action: ActivityActions
    )=>{
    
    if (action.type === 'save-activity'){
        // Este código maneja la logica para actualizar el estado
        

        return{
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
        
    }

    if (action.type === 'edit-activity'){
         return{
             ...state,
             activeId: action.payload.id
         }
    }

    return state
}