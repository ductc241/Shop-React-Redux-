import instance from "./instance";

export const getAll = () =>{
    const url = "/product";
    return instance.get(url)
}

export const add= (item) =>{
    const url = "/products";
    return  instance.post(url, item)
}