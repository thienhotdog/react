import instance from "./instance";

export const getAll = () =>{
    const url = "/products";
    return instance.get(url)
}

export const add= (item) =>{
    const url = "/products";
    return  instance.post(url, item)
}

export const remove = (id) =>{
    const url = `/products/${id}`;
    return instance.delete(url)
};

export const edit = (item) => {
    const url = `/products/${item.id}`;
    return instance.put(url, item);
  };
  
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};

export const sortProduct = (min,max) =>{
    const url = `/products?price_gte=${min}&price_lte=${max}`;
    return instance.get(url)
}

export const filterProduct = (value) =>{
    const url = `/products?name_like=${value}`;
    return instance.get(url);
}