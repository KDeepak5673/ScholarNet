export const INITIAL_STATE = {
    userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
    name: "",
    grade: "",
    regNo: "",
    age: 0,
};

export const gradeReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        
        default:
            return state;
    }
};