import React from "react";
import { Table, Image } from "react-bootstrap-v5";
import { calculateProductCost } from "../../shared/SharedMethod";
import "../../../assets/scss/frontend/pdf.scss";
import {
    currencySymbolHendling,
    getFormattedDate,
    getFormattedMessage,
} from "../../../shared/sharedMethod";

class PrintData extends React.PureComponent {
    render() {
        const paymentPrint = this.props.updateProducts;
        const allConfigData = this.props.allConfigData;
        const paymentType = this.props.paymentType;
        const selectedCustomer = this.props.selectedCustomer;
        const currency =
            paymentPrint.settings &&
            paymentPrint.settings.attributes &&
            paymentPrint.settings.attributes.currency_symbol;
        let totalSum = 0;
        let totalDiscountSum = 0;
        const currentDate = new Date();
        const formattedDate =
            (currentDate.toLocaleDateString(),
            currentDate.toLocaleTimeString());
        const dateNow = new Date().toLocaleDateString();
        return (
            <div
                className="print-data"
                style={{
                    width: "100%",
                    hight: "fit-content",
                    maxWidth: "600px",
                    fontFamily: "Arial, sans-serif",
                    color: "black",
                }}
            >
                <div className="text-black align-items-center text-center align-content-center fs-1  pb-1 mt-5">
                <img
                        className="w-100"
                        src="public/images/FATHIMAS.png"
                        alt="logo"
                    />
                </div>
                {/* <Table
                    className="information"
                    style={{
                        width: "100%",
                        border: "none",
                        fontFamily: "Arial, sans-serif",
                    }}
                >
                    <tbody
                        style={{
                            width: "100%",
                            fontFamily: "Arial, sans-serif",
                        }}
                    >
                        <tr
                            style={{
                                width: "100%",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            <td
                                style={{
                                    width: "100%",
                                    textAlign: "center",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                <h1
                                    style={{
                                        fontWeight: "bold",
                                        color: "#212529",
                                        fontFamily: "Arial, sans-serif",
                                    }}
                                >
                                    {paymentPrint.frontSetting &&
                                        paymentPrint.frontSetting.value
                                            .company_name}
                                </h1>
                            </td>
                        </tr>
                    </tbody>
                </Table> */}

                {/*address section*/}
                {/* <div
                    style={{
                        display: "flex",
                        fontSize: "12px",
                    }}
                >
                    <div>
                        {getFormattedMessage(
                            "react-data-table.date.column.label"
                        )}
                        :
                    </div>
                    <span
                        style={{
                            marginLeft: "10px",
                        }}
                    >
                        {getFormattedDate(
                            new Date(),
                            allConfigData && allConfigData
                        )}
                    </span>
                </div>

                <div
                    style={{
                        display: "flex",
                        fontSize: "12px",
                    }}
                >
                    <div>
                        {getFormattedMessage(
                            "supplier.table.address.column.title"
                        )}
                        :
                    </div>
                    <span
                        style={{
                            marginLeft: "10px",
                        }}
                    >
                        {paymentPrint.frontSetting &&
                            paymentPrint.frontSetting.value.address}
                    </span>
                </div>

                <div
                    style={{
                        display: "flex",
                        fontSize: "12px",
                    }}
                >
                    <div>
                        {getFormattedMessage("globally.input.email.label")}:
                    </div>
                    <span
                        style={{
                            marginLeft: "10px",
                        }}
                    >
                        {paymentPrint.frontSetting &&
                            paymentPrint.frontSetting.value.email}
                    </span>
                </div>

                <div
                    style={{
                        display: "flex",
                        fontSize: "12px",
                    }}
                >
                    <div>
                        {getFormattedMessage("pos-sale.detail.Phone.info")}:
                    </div>
                    <span
                        style={{
                            marginLeft: "10px",
                        }}
                    >
                        {paymentPrint.frontSetting &&
                            paymentPrint.frontSetting.value.phone}
                    </span>
                </div> */}

                <div
                    className="product-border"
                    style={{
                        fontSize: "12px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        // gap: "1px",
                    }}
                >
                    <div style={{ fontSize: "12px", textAlign: "center" }}>
                        {paymentPrint.frontSetting &&
                            paymentPrint.frontSetting.value.address}
                    </div>
                    <div
                        style={{
                            fontSize: "12px",
                            textAlign: "center",
                            marginTop: "-5px",
                        }}
                    >
                        Tel :077 56 56 092 / 076 60 81 313
                    </div>

                    <span
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: "12px",
                            textAlign: "center",
                            marginTop: "-5px",
                        }}
                    >
                        {" "}
                        <p>Date</p>
                        <p>:</p>
                        <p>{dateNow}</p>
                        <p>Time</p>
                        <p>:</p>
                        <p>{formattedDate}</p>
                    </span>

                    <span
                        style={{
                            width: "40%",
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: "12px",
                            textAlign: "center",
                            marginTop: "-15px",
                        }}
                    >
                        <p>Bill.No</p>
                        <p>:</p>
                        <p>{paymentPrint && paymentPrint.reference_code}</p>
                    </span>
                </div>

                {/* <Table
                    style={{
                        width: "75%",
                        border: "none",
                        fontFamily: "Arial, sans-serif",
                    }}
                >
                    <tbody
                        style={{
                            width: "100%",
                            fontFamily: "Arial, sans-serif",
                        }}
                    >
                        <tr
                            style={{
                                border: "0",
                                width: "100%",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            <td
                                className="fw-bold"
                                style={{
                                    marginRight: "10px",
                                    fontSize: "12px",

                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {getFormattedMessage(
                                    "react-data-table.date.column.label"
                                )}
                                :
                            </td>
                            <td>
                                <span
                                    style={{
                                        fontFamily: "Arial, sans-serif",
                                        fontSize: "12px",
                                    }}
                                >
                                    {getFormattedDate(
                                        new Date(),
                                        allConfigData && allConfigData
                                    )}
                                </span>
                            </td>
                        </tr>
                        <tr
                            style={{
                                border: "0",
                                width: "100%",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            <td
                                className="fw-bold"
                                style={{
                                    marginRight: "10px",
                                    fontSize: "12px",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {getFormattedMessage(
                                    "supplier.table.address.column.title"
                                )}
                                :
                            </td>
                            <td
                                style={{
                                    fontFamily: "Arial, sans-serif",
                                    fontSize: "12px",
                                }}
                            >
                                {paymentPrint.frontSetting &&
                                    paymentPrint.frontSetting.value.address}
                            </td>
                        </tr>
                        <tr
                            style={{
                                border: "0",
                                width: "100%",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            <td scope="row">
                                <span
                                    className="fw-bold"
                                    style={{
                                        marginRight: "10px",
                                        fontFamily: "Arial, sans-serif",
                                        fontSize: "12px",
                                    }}
                                >
                                    {getFormattedMessage(
                                        "globally.input.email.label"
                                    )}
                                    :
                                </span>
                            </td>
                            <td>
                                <span
                                    style={{
                                        fontFamily: "Arial, sans-serif",
                                        fontSize: "12px",
                                    }}
                                >
                                    {paymentPrint.frontSetting &&
                                        paymentPrint.frontSetting.value.email}
                                </span>
                            </td>
                        </tr>
                        <tr
                            style={{
                                border: "0",
                                width: "100%",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            <td scope="row">
                                <span
                                    className="fw-bold"
                                    style={{
                                        marginRight: "10px",
                                        fontFamily: "Arial, sans-serif",
                                        fontSize: "12px",
                                    }}
                                >
                                    {getFormattedMessage(
                                        "pos-sale.detail.Phone.info"
                                    )}
                                    :
                                </span>
                            </td>
                            <td>
                                <span
                                    style={{
                                        fontFamily: "Arial, sans-serif",
                                        fontSize: "12px",
                                    }}
                                >
                                    {paymentPrint.frontSetting &&
                                        paymentPrint.frontSetting.value.phone}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </Table> */}

                {/*Product Details*/}
                <div
                    className="product-border"
                    style={{
                        fontSize: "12px",
                        marginBottom: "3px",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            fontFamily: "Arial, sans-serif",
                        }}
                    >
                        <span>
                            {" "}
                            {getFormattedMessage(
                                "pos-item.print.invoice.title"
                            )}
                        </span>

                        <span>
                            {getFormattedMessage(
                                "product.table.price.column.label"
                            )}
                        </span>

                        <span>{getFormattedMessage("pos-qty.title")}</span>

                        <span>{getFormattedMessage("pos-total.title")}</span>
                    </div>
                </div>
                <div
                    className="product-border"
                    style={{
                        fontSize: "12px",
                        marginBottom: "3px",
                    }}
                >
                    {paymentPrint.products &&
                        paymentPrint.products.map((productName, index) => {
                            return (
                                <div key={index}>
                                    <span className="text-capitalize">
                                        {productName.name}
                                    </span>
                                    <div style={{ display: "flex" }}>
                                        <div
                                            className="text-capitalize"
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                fontFamily: "Arial, sans-serif",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span>
                                                {calculateProductCost(
                                                    productName.product_price
                                                ).toFixed(2)}
                                            </span>
                                            <span>
                                                {calculateProductCost(
                                                    productName
                                                ).toFixed(2)}
                                            </span>
                                            <span>X</span>

                                            <span
                                                style={{
                                                    fontSize: "12px",
                                                    fontFamily:
                                                        "Arial, sans-serif",
                                                }}
                                            >
                                                {productName.quantity}
                                                {/* {(productName.product_unit ===
                                                "3" &&
                                                "Kg") ||
                                                (productName.product_unit ===
                                                    "1" &&
                                                    "Pc") ||
                                                (productName.product_unit ===
                                                    "2" &&
                                                    "M")} */}
                                            </span>

                                            <span>
                                                {currencySymbolHendling(
                                                    allConfigData,
                                                    currency,
                                                    productName.quantity *
                                                        calculateProductCost(
                                                            productName
                                                        )
                                                )}
                                            </span>
                                        </div>
                                    </div>

                                    {
  productName.tax_value > 0 && (
    <div
      className="text-capitalize"
      style={{
        width: "70%",
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "Arial, sans-serif",
        alignItems: "center",
      }}
    >
      <span>Discount</span>
      <span>{productName.tax_value}%</span>
      <span>
        -
        {currencySymbolHendling(
          allConfigData,
          currency,
          calculateProductCost(
            productName.product_price - calculateProductCost(productName)
          ) * productName.quantity
        )}
      </span>
    </div>
  )
}


                                </div>
                            );
                        })}
                </div>
                {/* <Table
                    style={{
                        width: "100%",
                        marginTop: "10px",
                        fontFamily: "Arial, sans-serif",
                    }}
                >
                 <thead>
                        <tr
                            style={{
                                width: "100%",
                                // background: "#F8F9FA",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            <th
                                style={{
                                    textAlign: "start",
                                    padding: "8px 15px",
                                    fontSize: "12px",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {getFormattedMessage(
                                    "pos-item.print.invoice.title"
                                )}
                            </th>
                            <th
                                style={{
                                    textAlign: "start",
                                    padding: "8px 15px",
                                    fontSize: "12px",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {getFormattedMessage("pos-qty.title")}
                            </th>
                            <th
                                style={{
                                    textAlign: "start",
                                    padding: "8px 15px",
                                    fontSize: "12px",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {getFormattedMessage(
                                    "product.table.price.column.label"
                                )}
                            </th>
                            <th
                                style={{
                                    textAlign: "end",
                                    padding: "8px 15px",
                                    fontSize: "12px",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {getFormattedMessage("pos-total.title")}
                            </th>
                        </tr>
                    </thead> 
                    <tbody>
                        {paymentPrint.products &&
                            paymentPrint.products.map((productName, index) => {
                                return (
                                    <tr
                                        key={index}
                                        style={{
                                            width: "100%",
                                            borderBottom: "1px solid #DEE2E6",
                                            fontFamily: "Arial, sans-serif",
                                        }}
                                    >
                                        <td
                                            className="text-capitalize"
                                            style={{
                                                fontSize: "12px",
                                                padding: "8px 15px",
                                                fontFamily: "Arial, sans-serif",
                                            }}
                                        >
                                            {productName.name}
                                        </td>
                                        <td
                                            style={{
                                                fontSize: "12px",
                                                border: "none",
                                                padding: "8px 15px",
                                                fontFamily: "Arial, sans-serif",
                                            }}
                                        >
                                            {productName.quantity}{" "}
                                            {(productName.product_unit ===
                                                "3" &&
                                                "Kg") ||
                                                (productName.product_unit ===
                                                    "1" &&
                                                    "Pc") ||
                                                (productName.product_unit ===
                                                    "2" &&
                                                    "M")}
                                        </td>
                                        <td
                                            style={{
                                                fontSize: "12px",
                                                border: "none",
                                                padding: "8px 15px",
                                                fontFamily: "Arial, sans-serif",
                                            }}
                                        >
                                            {calculateProductCost(
                                                productName
                                            ).toFixed(2)}
                                        </td>
                                        <td
                                            style={{
                                                fontSize: "12px",
                                                textAlign: "right",
                                                border: "none",
                                                padding: "8px 15px",
                                                fontFamily: "Arial, sans-serif",
                                            }}
                                        >
                                            <span>
                                                {currencySymbolHendling(
                                                    allConfigData,
                                                    currency,
                                                    productName.quantity *
                                                        calculateProductCost(
                                                            productName
                                                        )
                                                )}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table> */}

                {/*total amount section*/}
                {/* <Table
                    style={{
                        width: "100%",
                        marginTop: "10px",
                        fontFamily: "Arial, sans-serif",
                    }}
                >
                    <tbody
                        style={{
                            width: "100%",
                            fontFamily: "Arial, sans-serif",
                        }}
                    >
                        <tr
                            style={{
                                width: "100%",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            <td
                                style={{
                                    textAlign: "left",
                                    width: "60%",
                                    padding: "0 0 5px",
                                    fontWeight: "500",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {getFormattedMessage("pos-total-amount.title")}:
                            </td>
                            <td
                                style={{
                                    textAlign: "right",
                                    width: "40%",
                                    padding: "0 0 5px",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {currencySymbolHendling(
                                    allConfigData,
                                    currency,
                                    paymentPrint.subTotal
                                        ? paymentPrint.subTotal
                                        : "0.00"
                                )}
                            </td>
                        </tr>
                        <tr style={{ width: "100%" }}>
                            <td
                                style={{
                                    textAlign: "left",
                                    width: "60%",
                                    padding: "0 0 5px",
                                    // fontWeight: "500",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {getFormattedMessage(
                                    "globally.detail.discount"
                                )}
                                :
                            </td>
                            <td
                                style={{
                                    textAlign: "right",
                                    width: "40%",
                                    padding: "0 0 5px",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {currencySymbolHendling(
                                    allConfigData,
                                    currency,
                                    paymentPrint
                                        ? paymentPrint.discount
                                        : "0.00"
                                )}
                            </td>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    textAlign: "left",
                                    padding: "0 0 5px",
                                    fontWeight: "500",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {getFormattedMessage(
                                    "globally.detail.grand.total"
                                )}
                                :
                            </td>
                            <td
                                style={{
                                    textAlign: "right",

                                    padding: "0 0 5px",
                                }}
                            >
                                {currencySymbolHendling(
                                    allConfigData,
                                    currency,
                                    paymentPrint.subTotal
                                        ? paymentPrint.subTotal
                                        : "0.00"
                                )}
                            </td>
                        </tr>
                    </tbody>
                </Table> */}

                {/*sub totel*/}
                <div className="d-flex">
                    <div>{getFormattedMessage("pos-total-amount.title")}:</div>
                    <div className="text-end ms-auto">
                        {currencySymbolHendling(
                            allConfigData,
                            currency,
                            paymentPrint.subTotal
                                ? paymentPrint.subTotal
                                : "0.00"
                        )}
                    </div>
                </div>

                {/*Grand Total*/}
                <div className="d-flex text-black ">
                    <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                        {getFormattedMessage("globally.detail.grand.total")}:
                    </div>
                    <div
                        className="text-end ms-auto"
                        style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "black",
                        }}
                    >
                        {currencySymbolHendling(
                            allConfigData,
                            currency,
                            paymentPrint.grandTotal
                        )}
                    </div>
                </div>

                <div className="d-flex">
                    <p style={{ fontSize: "12px", color: "black" }}>
                        NO OF QTY SOLD :
                    </p>
                    <div className=" text-black  ">
                        {paymentPrint.products &&
                            paymentPrint.products.map((productName, index) => {
                                // Check if productName meets the condition (e.g., if quantity is greater than a certain threshold)
                                if (productName.quantity > 0) {
                                    // If the condition is met, add the quantity to the total sum
                                    totalSum += productName.quantity;
                                }
                                // If the condition is not met, simply return null (or an empty div)
                                return null;
                            })}
                        {/* // Render the total sum after mapping through the array */}
                        <div>{totalSum}</div>
                    </div>
                </div>

                {/*Discount*/}
                <div className="d-flex text-black  ">
                    <div>Saved value:</div>
                    <div className="text-end ms-auto">
                        {paymentPrint.products &&
                            paymentPrint.products.map((productName, index) => {
                                // Calculate the discount for each product
                                const discount =
                                    productName.product_price -
                                    calculateProductCost(productName);
                                // Accumulate the discount to the total sum
                                totalDiscountSum +=
                                    discount * productName.quantity;

                                // Render the product details with discount
                                return null;
                            })}

                        {/* Display the total sum of discounts */}
                        <div>
                            {currencySymbolHendling(
                                allConfigData,
                                currency,
                                totalDiscountSum
                            )}
                        </div>
                    </div>
                </div>

                {/* <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {" "}
                    <p>{getFormattedMessage(
                                    "pos-sale.detail.Paid-bt.title"
                                )}:</p>
                                <p>{paymentType}</p>
                                
                    
                    
                    
                </div> */}
                <div
                    className="product-border"
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        color: "black",
                    }}
                >
                    <div>{getFormattedMessage("pos.change-return.label")}</div>
                    <div>
                        {currencySymbolHendling(
                            allConfigData,
                            currency,
                            paymentPrint.changeReturn
                        )}
                    </div>
                </div>

                {/* <Table
                    style={{
                        width: "100%",
                        marginTop: "30px",
                        fontFamily: "Arial, sans-serif",
                    }}
                >
                    <thead>
                        <tr
                            style={{
                                width: "100%",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            <th
                                style={{
                                    textAlign: "start",
                                    padding: "8px 15px",
                                    fontSize: "14px",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {getFormattedMessage(
                                    "pos-sale.detail.Paid-bt.title"
                                )}
                            </th>
                             <th
                                style={{
                                    textAlign: "center",
                                    padding: "8px 15px",
                                    fontSize: "14px",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {getFormattedMessage(
                                    "expense.input.amount.label"
                                )}
                            </th>
                            <th
                                style={{
                                    textAlign: "end",
                                    padding: "8px 15px",
                                    fontSize: "14px",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {getFormattedMessage("pos.change-return.label")}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            style={{
                                width: "100%",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            <td
                                style={{
                                    fontSize: "14px",
                                    padding: "8px 15px",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {paymentType}
                            </td>
                             <td
                                style={{
                                    fontSize: "14px",
                                    textAlign: "center",
                                    padding: "8px 15px",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {currencySymbolHendling(
                                    allConfigData,
                                    currency,
                                    paymentPrint.grandTotal
                                )}
                            </td>
                            <td
                                style={{
                                    fontSize: "14px",
                                    textAlign: "end",
                                    padding: "8px 15px",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                {currencySymbolHendling(
                                    allConfigData,
                                    currency,
                                    paymentPrint.changeReturn
                                )}
                            </td>
                        </tr>
                    </tbody>
                </Table> */}

                {/*note section*/}
                {paymentPrint && paymentPrint.note ? (
                    <Table>
                        <tbody
                            style={{
                                width: "100%",
                                paddingTop: "20px",
                                fontFamily: "Arial, sans-serif",
                                color: "black",
                            }}
                        >
                            <tr
                                style={{
                                    border: "0",
                                    width: "100%",
                                    fontFamily: "Arial, sans-serif",
                                    color: "black",
                                }}
                            >
                                <td
                                    scope="row"
                                    style={{
                                        padding: "0",
                                        width: "100%",
                                        fontSize: "15px",
                                        fontFamily: "Arial, sans-serif",
                                        color: "black",
                                    }}
                                >
                                    <span
                                        style={{
                                            width: "55px",
                                            fontSize: "15px",
                                            verticalAlign: "top",
                                            display: "inline-block",
                                            fontFamily: "Arial, sans-serif",
                                            color: "black",
                                        }}
                                    >
                                        {getFormattedMessage(
                                            "globally.input.notes.label"
                                        )}{" "}
                                        :
                                    </span>
                                    <p
                                        style={{
                                            fontSize: "13px",
                                            width: "100px",
                                            verticalAlign: "top",
                                            display: "inline-block",
                                            fontFamily: "Arial, sans-serif",
                                            color: "black",
                                        }}
                                    >
                                        {paymentPrint && paymentPrint.note}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                ) : (
                    ""
                )}

                <h3
                    style={{
                        textAlign: "center",
                        marginTop: "15px",
                        fontFamily: "Arial, sans-serif",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        color: "black",
                    }}
                >
                    {getFormattedMessage("pos-thank.you-slip.invoice")}.
                </h3>

                <p
                    style={{
                        textAlign: "center",
                        fontFamily: "Arial, sans-serif",
                        fontSize: "10px",
                        lineHeight: "14px",
                        color: "black",
                    }}
                >
                    *********************************************************
                    <br />
                    IF ANY ITEM NEED TO BE EXCHANGED,
                    <br />
                    PLEASE SUBMIT WITH BILL WITH IN 7 DAYS
                    <br />
                    ***CONDITIONS APPLY***
                    <br />
                    **********************************************************
                </p>
            </div>
        );
    }
}

export default PrintData;
