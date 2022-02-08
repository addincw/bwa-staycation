import React from 'react';
import propTypes from 'prop-types';
import FormField from '../../base/FormField';
import HeaderSection from '../HeaderSection';
import InputText from '../InputText/inputText';
import useCheckoutBill from './useCheckoutBill';

const paymentOptions = [
    {
        imgUrl: "images/banks/bca.png",
        bank: "Bank Central Asia",
        accountNumber: "2208 1996",
        accountName: "BuildWith Angga"
    },
    {
        imgUrl: "images/banks/mandiri.png",
        bank: "Mandiri",
        accountNumber: "2208 1996",
        accountName: "BuildWith Angga"
    },
]

const CheckoutBill = ({ classes, setAllowNextStep }) => {
    const { formValues, handleFieldChange } = useCheckoutBill({ setAllowNextStep });

    return (
        <section className={classes}>
            <HeaderSection
                title="Payment"
                description="Kindly follow the instructions below"
            />

            <div className="w-10/12 m-auto flex">
                <div className="w-1/2 border-r pt-7 pl-20 text-stay-dark-blue">
                    <p className="mb-5">Transfer Pembayaran:</p>
                    
                    <div className="mb-5">
                        <p>Tax: 10%</p>
                        <p>Sub total: $480</p>
                        <p>Total: $580</p>
                    </div>

                    { paymentOptions.map((payment, index) => (
                        <div className="flex mb-5" key={`${index}-option`}>
                            <figure className="mr-4">
                                <img className="w-[60px] h-[35px] bg-cover" src={payment.imgUrl} alt="" />
                            </figure>
                            <div className="pt-2">
                                <p>{payment.bank}</p>
                                <p>{payment.accountNumber}</p>
                                <p>{payment.accountName}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-1/2  pt-7 pl-20">
                    <FormField htmlFor="transfertNote" label="Upload Bukti Transfer">
                        <InputText
                            id="transferNote"
                            name="transferNote"
                            placeholder="Browse a file..."
                            value={formValues.transferNote || ''}
                            onChange={handleFieldChange}
                        />
                    </FormField>
                    <FormField htmlFor="transferBank" label="Asal Bank">
                        <InputText
                            id="transferBank"
                            name="transferBank"
                            value={formValues.transferBank || ''}
                            onChange={handleFieldChange}
                        />
                    </FormField>
                    <FormField htmlFor="transferSender" label="Nama Pengirim">
                        <InputText
                            id="transferSender"
                            name="transferSender"
                            value={formValues.transferSender || ''}
                            onChange={handleFieldChange}
                        />
                    </FormField>
                </div>
            </div>
        </section>
    );
};

CheckoutBill.defaultProps = {
    classes: "",
};

CheckoutBill.propsType = {
    classes: propTypes.string,
};


export default CheckoutBill;
