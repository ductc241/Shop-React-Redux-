import instance from "./instance";

export const login = (user) => {
    const url = "/account/signin";
    return instance.post(url, user)
}