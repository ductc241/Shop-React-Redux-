import instance from "./instance";

export const getAll = () => {
    const url = "/api/category";
    return instance.get(url)
}

export const add = (item) =>{
    const url = "api/category";
    return instance.post(url, item)
}

export const remove = (id) =>{
    const url = `api/category/${id}`;
    return instance.delete(url)
}