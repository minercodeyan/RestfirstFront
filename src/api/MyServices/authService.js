export default function (instance) {
    return {
        signUp(user) {
            return instance.post('/auth/register', user)
        },
        signIn(user) {
            return instance.post('/auth/login', user)
                .then(response => {
                    if (response.data.accessToken) {
                        localStorage.setItem('user', JSON.stringify(response.data))
                        return response.data
                    }
                    else {
                        return null;
                    }
                })
        },
        logout() {
            localStorage.removeItem('user')
        }
    }

}