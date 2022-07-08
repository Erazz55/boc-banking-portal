import { Field, Formik } from "formik";
import { do_bill_payment } from "../../app/action_layer/bill_payment_action";

export interface BillPaymentFormCardProps {}

export const BillPaymentFormCard: React.FC<BillPaymentFormCardProps> = (
  props
) => {
  
  const handleSubmit = async (values: any) => {
    const data = {
      accountNumber: values.accountNumber,
      billerCode:values.biller,
      mobile: values.mobile,
      amount: values.amount,
    }
    await do_bill_payment(data).then((response: any) => {
      alert(JSON.stringify(response.data.message, null, 2));
    });
  };

  return (
    <>
      <div className="flex justify-start  my-2 mx-4 md:mx-0">
        <Formik
          initialValues={{ mobile: "", amount: "", biller: "", accountNumber: "" }}
          onSubmit={(values, {resetForm}) => {
            handleSubmit(values);
            resetForm({});
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-2xl bg-white rounded-lg shadow-2xl  m-2"
            >
              <div className="flex flex-wrap  mb-6">
                <div className="subtitle">
                  <h2>Pay Bill</h2>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Account Number
                  </label>
                  <Field
                    name="accountNumber"
                    as="select"
                    className="block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                  >
                    <option className="option" value="">Plase select an account</option>
                    <option className="option" value="8224002623">8224002623</option>
                    <option className="option" value="8224225536">8224225536</option>
                    <option className="option" value="6225448565">6225448565</option>
                  </Field>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Biller
                  </label>
                  <Field
                    name="biller"
                    as="select"
                    className="block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                  >
                     <option className="option" value="">Plase select a biller</option>
                    <option className="option" value="GSMU003900">Dialog - Reload</option>
                    <option className="option" value="GSMU004900">Dialog - Bill Payment</option>
                    <option className="option" value="mobitel">Mobitel</option>
                  </Field>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Mobile Number
                  </label>
                  <input
                    className="mobile_number_field"
                    type="text"
                    name="mobile"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobile}
                  />
                  {errors.mobile && touched.mobile && errors.mobile}
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Amount
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="number"
                    name="amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amount}
                  />
                  {errors.amount && touched.amount && errors.amount}
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="form_button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
