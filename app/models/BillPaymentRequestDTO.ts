export class BillPaymentRequestDTO {
    accountNumber:string;
    billerCode:string;
    mobile:string;
    amount: number
    constructor(accountNumber:string,billerCode:string, mobile:string, amount:number) {
        this.accountNumber = accountNumber;
        this.billerCode = billerCode;
        this.mobile = mobile;
        this.amount = amount;
    }
}