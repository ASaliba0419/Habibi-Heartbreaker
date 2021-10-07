import api from "./apiConfig";

export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    console.log("this is the response.data!", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSupport = async () => {
  try {
    const response = await api.get("/supports");
    return response.data;
  } catch (error) {
    throw error;
  }

}

export const createSupport = async (support) => {
  try {
    const response = await api.post("/supports", support);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSupport = async (id, support) => {
  try {
    const response = await api.put(`/supports/${id}`, support);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSupport = async (id) => {
  try {
    const response = await api.delete(`/supports/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};