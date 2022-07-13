import axios from 'axios';
import { BillPaymentRequestDTO } from '../models/BillPaymentRequestDTO';
import { CheckBillRequestDTO } from '../models/CheckBillRequestDTO';

const BASE_API = "http://localhost:8080";

/**
 * Check Bill API
 * params: mobile
 */
 export const checkBill = async (data: CheckBillRequestDTO) => {
    console.log(data, "*****check bill request*****");
    
    return await axios({
      method: "POST",
      baseURL: BASE_API,
      url: `/bill-payment/check-bill`,
      data: data,
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        console.log(response, "*****check bill response*****");
        
        return response;
      })
      .catch((error) => {
        return "Error"
      });
  };
  

  /**
 * Do Bill Payment API
 * params: BillPaymentRequestDTO
 */
 export const billPayment = async (data: BillPaymentRequestDTO) => {
    console.log(data, "*****do bill request*****");
    
    return await axios({
      method: "POST",
      baseURL: BASE_API,
      url: `/bill-payment`,
      data: data,
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        console.log(response, "*****do bill response*****");
        
        return response;
      })
      .catch((error) => {
        return "Error"
      });
  };