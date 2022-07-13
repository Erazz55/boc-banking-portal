export class CheckBillRequestDTO {
    biller:string;
    mobile:string;
    constructor(biller:string, mobile:string) {
        this.biller = biller;
        this.mobile = mobile;
    }
}