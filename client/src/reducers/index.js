// Fix the REGISTRATION case
const mainReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case 'AD_LOG_IN': {
            let { isAuth, isAdAuth, userEmail, adminName } = state;
            isAdAuth = true;
            adminName = payload.adminName;
            return {
                isAuth,
                isAdAuth,
                userEmail,
                adminName
            }
        }
        case 'AD_LOG_OUT': {
            let { isAuth, isAdAuth, userEmail, adminName } = state;
            isAdAuth = false;
            adminName = '';
            return {
                isAuth,
                isAdAuth,
                userEmail,
                adminName
            }
        }

        case 'LOG_IN': {
            let { isAuth, isAdAuth, userEmail, adminName } = state;
            isAuth = true;
            userEmail = payload.email;
            return {
                isAuth,
                isAdAuth,
                userEmail,
                adminName
            }
        }
        case 'LOG_OUT': {
            let { isAuth, isAdAuth, userEmail, adminName } = state;
            isAuth = false;
            userEmail = '';
            return {
                isAuth,
                isAdAuth,
                userEmail,
                adminName
            }
        }
        default: return state;
    }
}

export default mainReducer;