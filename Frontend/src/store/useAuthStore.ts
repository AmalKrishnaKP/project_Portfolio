

import { create } from 'zustand'

export type user = {
    username: string,
    password: string,
    role: string,

}


type roleState = {
    currentUser: user
    login: (username: string, password: string) => void
    logout: () => void
}

export const useAuthStore = create<roleState>((set) => ({
    currentUser: {
        username: "",
        password: "",
        role: ""
    },
    login: (username, password) => {
        if (username == "admin" && password == "admin@123") {
            set({
                currentUser: {
                    username: "admin",
                    password,
                    role: "admin"

                }
            })
        }
        else if (username == "employee" && password == "employee@123") {
            set({
                currentUser: {
                    username: "employee",
                    password,
                    role: "employee"

                }
            })
        }
        else {
            console.log("no user");

        }

    },
    logout: () => {
        set({
            currentUser: {
                username: "",
                password: "",
                role: ""
            }
        })
    }
}))