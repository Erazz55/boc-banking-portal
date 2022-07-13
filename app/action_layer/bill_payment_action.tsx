import { billPayment, checkBill } from "../api_layer/billPaymentAPI"
import { BillPaymentRequestDTO } from "../models/BillPaymentRequestDTO";
import { CheckBillRequestDTO } from "../models/CheckBillRequestDTO";

export const check_bill = async (data: CheckBillRequestDTO) => {
    return await checkBill(data);
}

export const do_bill_payment = async (data: BillPaymentRequestDTO) => {
    return await billPayment(data);
}