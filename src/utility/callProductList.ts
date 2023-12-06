import {PRODUCT_LIST_URL} from './api';
import {ProductListType} from '../types/types';


/**
 * Function to call product list api
 * @returns Promise of Product List
 */
export const CallProductListAPI = async () => {
  const resData = await fetch(PRODUCT_LIST_URL);
  if (resData.ok) {
    const resp = await resData.json();
    return resp as Promise<ProductListType>;
  }else {
    throw new Error(`Something went wrong. Error code ${resData.status}`)
  }
};
