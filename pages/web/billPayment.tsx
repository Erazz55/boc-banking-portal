import { SideNavigation } from "../../components/cards/SideNavigation";
import Navigation from "../../components/navigation/Navigation";
import BillPaymentWrapper from "../../layouts/bill_payments/BillPaymentWrapper";

export interface BillPaymentProps {}

const BillPayment: React.FC<BillPaymentProps> = (props) => {
  return (
    <>
      <Navigation />
      <div className="flex flex-row">
        <SideNavigation />
        <BillPaymentWrapper />
      </div>
    </>
  );
};

export default BillPayment;
