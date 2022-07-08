import { BillPaymentFormCard } from "../../components/cards/BillPaymentFormCard";
import { CheckBillFormCard } from "../../components/cards/CheckBillFormCard";


export interface BillPaymentWrapperProps {}

const BillPaymentWrapper: React.FC<BillPaymentWrapperProps> = (props) => {


  return (
    <>
      <div className="bill-paymet-wrapper">
        <div className="bill-paymet-wrapper__card">
          <div className="__title_wrapper" >
             <h1 className="__title_wrapper__title">Bill Payment</h1>
          </div>
          <div className="__break"></div>

          <div className="flex flex-row">
          <BillPaymentFormCard/>
          <CheckBillFormCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillPaymentWrapper;
