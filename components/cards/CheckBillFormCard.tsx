import React, { useState } from "react";
import { Field, Formik } from "formik";
import { check_bill } from "../../app/action_layer/bill_payment_action";

export interface CheckBillFormCardProps {
  className?: string;
}

export const CheckBillFormCard: React.FC<CheckBillFormCardProps> = (
  props
) => {
  
  const [bill, setBill] = useState('');
  const [balance, setBalance] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (values: any) => {  
    const data = {
      mobile: values.mobile,
      biller: values.biller,
    }
    await check_bill(data).then((response: any) => {
      console.log(response);
      setBill(response?.data?.data?.billAmount);
      setBalance(response?.data?.data?.balance);
      setType(response.data?.data?.type);
    });
  };


  return (
    <>
      <div className="flex justify-start  my-2 mx-4 md:mx-0">
        <Formik
          initialValues={{ mobile: "", biller: ""}}
          onSubmit={(values) => handleSubmit(values)}
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
              className="w-full max-w-lg bg-white rounded-lg shadow-2xl m-2"
            >
              <div className="flex flex-wrap  mb-6">
                <div className="subtitle">
                  <h2>Check Bill</h2>
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
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="text"
                    name="mobile"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobile}
                  />
                  {errors.mobile && touched.mobile && errors.mobile}
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
              
              <div className="details_wrapper">
                <div>{balance && balance !== "0.00" ? 
                      <>
                        <h1 className="bill-amount-text-title">Details</h1>
                        <h1 className="bill-amount-text"><span>Balance:</span> {`Rs. ${balance}`}</h1>
                        <h1 className="bill-amount-text"><span>Package Type:</span> {`${type}`}</h1>
                      </> : ""}</div>
                <div>{bill && bill !== "0.00" ? 
                <>
                  <h1 className="bill-amount-text-title">Details</h1>
                  <h1 className="bill-amount-text"><span>Bill Amount:</span> {`Rs. ${bill}`}</h1>
                  <h1 className="bill-amount-text"><span>Package Type:</span> {`${type}`}</h1>
                </> : ""}</div>
              </div>
            </form>
            
          )}
        </Formik>
        
      </div>
    </>
  );
};
