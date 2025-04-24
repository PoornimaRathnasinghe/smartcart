import React from "react";
import { Modal, Table, Image } from "react-bootstrap";
import { calculateProductCost } from "../../shared/SharedMethod";
import {
    currencySymbolHendling,
    getFormattedDate,
    getFormattedMessage,
} from "../../../shared/sharedMethod";

const PaymentSlipModal = (props) => {
    const {
        modalShowPaymentSlip,
        setModalShowPaymentSlip,
        updateProducts,
        printPaymentReceiptPdf,
        paymentType,
        frontSetting,
        paymentDetails,
        allConfigData,
        setPaymentValue,
        paymentTypeDefaultValue,
    } = props;
    const currency =
        updateProducts.settings &&
        updateProducts.settings.attributes &&
        updateProducts.settings.attributes.currency_symbol;

    //total Qty on cart item
    // const localCart = updateProducts.map((updateQty) =>
    //     Number(updateQty.quantity)
    // );
    // const totalQty =
    //     localCart.length > 0 &&
    //     localCart.reduce((cart, current) => {
    //         return cart + current;
    //     });

    return (
        <Modal
            show={modalShowPaymentSlip}
            onHide={() => {
                setModalShowPaymentSlip(false);
                setPaymentValue({
                    payment_type: paymentTypeDefaultValue[0],
                });
            }}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="pos-modal p-3 "
        >
            {/* <Modal.Header closeButton className="pb-3">
                <Modal.Title id="contained-modal-title-vcenter">
                    {getFormattedMessage("pos-sale.detail.invoice.info")}
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body className="pt-5 pb-2 ">
                <div className="text-black text-center fs-1  pb-1 mt-1 ">
                    
                <img
                        className="w-100"
                        src="public/images/FATHIMAS.png"
                        alt="logo"
                    />
                </div>
                {/* <Table>
                    <tbody>
                        <tr>
                            <td
                                scope="column"
                                className="p-0 d-flex  flex-row justify-content-between text-black"
                            >
                                <div
                                    id="contained-modal-title-vcenter"
                                    className=" text-black "
                                >
                                    {getFormattedMessage(
                                        "pos-sale.detail.invoice.info"
                                    )}
                                    :
                                    <span className="ms-2 address__value d-inline-block font-label">
                                        {frontSetting.value &&
                                            frontSetting.value.invoice}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {getFormattedMessage(
                                            "react-data-table.date.column.label"
                                        )}
                                        :
                                    </span>
                                    <span className="ms-2 font-label">
                                        {getFormattedDate(
                                            new Date().toLocaleString(),
                                            allConfigData && allConfigData
                                        )}
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row" className="p-0">
                                <span className="address__label d-inline-block">
                                    {getFormattedMessage(
                                        "supplier.table.address.column.title"
                                    )}
                                    :
                                </span>
                                <span className="ms-2 address__value d-inline-block font-label">
                                    {frontSetting.value &&
                                        frontSetting.value.address}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row" className="p-0">
                                <span>
                                    {getFormattedMessage(
                                        "globally.input.email.label"
                                    )}
                                    :
                                </span>
                                <span className="ms-2 font-label">
                                    {frontSetting.value &&
                                        frontSetting.value.email}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row" className="p-0">
                                <span>
                                    {getFormattedMessage(
                                        "pos-sale.detail.Phone.info"
                                    )}
                                    :
                                </span>
                                <span className="ms-2 font-label">
                                    {frontSetting.value &&
                                        frontSetting.value.phone}
                                </span>
                            </td>
                        </tr>
                         <tr>
                            <td scope="row" className="p-0">
                                <span>
                                    {" "}
                                    {getFormattedMessage(
                                        "dashboard.recentSales.customer.label"
                                    )}
                                    :{" "}
                                </span>
                                <span className="ms-2 font-label">
                                    {updateProducts.customer_name &&
                                    updateProducts.customer_name[0]
                                        ? updateProducts.customer_name[0].label
                                        : updateProducts.customer_name &&
                                          updateProducts.customer_name.label}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </Table> */}
                <div className=" product-border">
                    {frontSetting.value && frontSetting.value.address}
                    <br />
                    <span className="ms-2 font-label ">
                        Tel: 077 56 56 092 / 076 60 81 313
                    </span>
                    <div>
                        Date:
                        {getFormattedDate(
                            new Date().toLocaleString(),
                            allConfigData && allConfigData
                        )}
                    </div>
                </div>

                {updateProducts.products &&
                    updateProducts.products.map((productName, index) => {
                        return (
                            <div key={index + 1}>
                                <div className="p-0">
                                    {productName.name}{" "}
                                    <span>({productName.code})</span>
                                </div>
                                <div className="p-1 align-items-end">
                                    <div className="border-0 d-flex justify-content-between">
                                        <span className="">
                                            {productName.quantity.toFixed(2)}{" "}
                                            {(productName.product_unit ===
                                                "3" &&
                                                "Kg") ||
                                                (productName.product_unit ===
                                                    "1" &&
                                                    "Pc") ||
                                                (productName.product_unit ===
                                                    "2" &&
                                                    "M")}{" "}
                                            X{" "}
                                            {productName.product_price.toFixed(
                                                2
                                            )}{" "}
                                        </span>
                                        <span className="text-end">
                                            {currencySymbolHendling(
                                                allConfigData,
                                                currency,
                                                productName.quantity *
                                                    productName.product_price
                                            )}
                                        </span>
                                    </div>
                                    <div className=" d-flex  justify-content-between ">
                                        <span>Discount</span>
                                        <span>
                                            -{currencySymbolHendling(
                                                allConfigData,
                                                frontSetting.value &&
                                                    frontSetting.value
                                                        .currency_symbol,
                                                calculateProductCost(
                                                    productName.product_price -
                                                        calculateProductCost(
                                                            productName
                                                        )
                                                ) * productName.quantity
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                <div className="d-flex product-border">
                    <div>{getFormattedMessage("pos-total-amount.title")}:</div>
                    <div className="text-end ms-auto">
                        {" "}
                        {currencySymbolHendling(
                            allConfigData,
                            currency,
                            updateProducts.subTotal
                                ? updateProducts.subTotal
                                : "0.00"
                        )}
                    </div>
                </div>
                {/* 
                <div className="d-flex product-border">
                    <div>
                        {getFormattedMessage("globally.detail.order.tax")}:
                    </div>
                    <div className="text-end ms-auto">
                        {" "}
                        {currencySymbolHendling(
                            allConfigData,
                            currency,
                            updateProducts.taxTotal
                                ? updateProducts.taxTotal
                                : "0.00"
                        )}{" "}
                        (
                        {updateProducts
                            ? parseFloat(updateProducts.tax).toFixed(2)
                            : "0.00"}{" "}
                        %)
                    </div>
                </div> */}
                <div className="d-flex product-border">
                    <div>
                        {getFormattedMessage(
                            "purchase.order-item.table.discount.column.label"
                        )}
                        :
                    </div>
                    <div className="text-end ms-auto">
                        {" "}
                        {currencySymbolHendling(
                            allConfigData,
                            currency,
                            updateProducts ? updateProducts.discount : "0.00"
                        )}
                    </div>
                </div>
                {/* <h4 className="fs-3 mb-2 custom-big-content text-gray-600">
                    {getFormattedMessage("pos-total-qty.title")} :{" "}
                    {
                        (allConfigData,
                        currency,
                        totalQty)
                    }
                </h4> */}
                {/* {updateProducts.shipping ? (
                    <div className="d-flex product-border">
                        <div>Shipping:</div>
                        <div className="text-end ms-auto">
                            {" "}
                            {currencySymbolHendling(
                                allConfigData,
                                currency,
                                updateProducts
                                    ? updateProducts.shipping
                                    : "0.00"
                            )}
                        </div>
                    </div>
                ) : (
                    ""
                )} */}
                <div className="d-flex product-border">
                    <div>
                        {getFormattedMessage("purchase.grant-total.label")}:
                    </div>
                    <div className="text-end ms-auto">
                        {" "}
                        {currencySymbolHendling(
                            allConfigData,
                            currency,
                            updateProducts.grandTotal
                        )}
                    </div>
                </div>
                <Table striped className="mb-0">
                    <thead>
                        <tr>
                            <th className="py-2 px-0">
                                {getFormattedMessage(
                                    "pos-sale.detail.Paid-bt.title"
                                )}
                            </th>
                            <th className="text-end py-2 px-0">
                                {getFormattedMessage(
                                    "expense.input.amount.label"
                                )}
                            </th>
                            <th className="text-end py-2 px-0">
                                {getFormattedMessage("pos.change-return.label")}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-0">{paymentType}</td>
                            <td className="text-end py-2 px-0">
                                {currencySymbolHendling(
                                    allConfigData,
                                    currency,
                                    updateProducts.grandTotal
                                )}
                            </td>
                            <td className="text-end py-2 px-0">
                                {currencySymbolHendling(
                                    allConfigData,
                                    currency,
                                    updateProducts.changeReturn
                                )}
                            </td>
                        </tr>
                    </tbody>
                </Table>
                {updateProducts && updateProducts.note ? (
                    <div className="d-flex product-border mb-5">
                        <div className="fw-bolder">Notes:</div>
                        <div className="ms-2 mb-2 product-border__product-width">
                            {updateProducts && updateProducts.note}
                        </div>
                    </div>
                ) : (
                    ""
                )}
                <h5 className="text-center font-label">
                    {getFormattedMessage("pos-thank.you-slip.invoice")}.
                </h5>
                <div className="text-center d-block">
                    <Image
                        src={
                            paymentDetails &&
                            paymentDetails.attributes.barcode_url
                        }
                        className=""
                        height={25}
                        width={100}
                    />
                    <span className="d-block">
                        {paymentDetails &&
                            paymentDetails.attributes.reference_code}
                    </span>
                </div>
            </Modal.Body>
            <Modal.Footer className="justify-content-center pt-2">
                <button
                    className="btn btn-primary text-white"
                    onClick={printPaymentReceiptPdf}
                >
                    {getFormattedMessage("print.title")}
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        setModalShowPaymentSlip(false);
                        setPaymentValue({
                            payment_type: paymentTypeDefaultValue[0],
                        });
                    }}
                >
                    {getFormattedMessage("pos-close-btn.title")}
                </button>
            </Modal.Footer>
        </Modal>
    );
};
export default PaymentSlipModal;
