import instance from "./instance";

export const getAll = () => {
    const url = "/api/product";
    return instance.get(url)
}

export const getOne = (id) => {
    const url = `api/product/${id}`
    return instance.get(url)
}

export const add = (item) =>{
    const url = "api/product";
    return instance.post(url, item)
}

export const remove = (id) =>{
    const url = `api/product/${id}`;
    return instance.delete(url)
}

export const update = (id, item) =>{
    const url = `api/product/${id}`;
    return instance.put(url, item)
}