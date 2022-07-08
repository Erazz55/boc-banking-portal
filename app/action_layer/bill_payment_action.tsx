import { billPayment, checkBill } from "../api_layer/billPaymentAPI"
import { BillPaymentRequestDTO } from "../models/BillPaymentRequestDTO";

export const check_bill = async (mobile: string) => {
    return await checkBill(mobile);
}

export const do_bill_payment = async (data: BillPaymentRequestDTO) => {
    return await billPayment(data);
}