export class BillPaymentRequestDTO {
    billerCode:string;
    mobile:string;
    amount: number
    constructor(billerCode:string, mobile:string, amount:number) {
        this.billerCode = billerCode;
        this.mobile = mobile;
        this.amount = amount;
    }
}