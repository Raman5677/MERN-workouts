import { WorkoutsContext } from "../Context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if(!context) {
        throw Error('Useworkout context must be used inside am workout context provider')
    }

    return context
}