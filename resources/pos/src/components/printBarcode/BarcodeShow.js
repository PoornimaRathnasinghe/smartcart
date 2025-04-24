import React from "react";
import { Image } from "react-bootstrap-v5";
import { currencySymbolHendling } from "../../shared/sharedMethod";
import { getFormattedMessage } from "../../shared/sharedMethod";

const BarcodeShow = (props) => {
    const {
        updateProducts,
        paperSize,
        updated,
        frontSetting,
        allConfigData,
        barcodeOptions,
    } = props;

    const companyName = frontSetting?.value?.company_name;
    const currencySymbol =
        frontSetting &&
        frontSetting.value &&
        frontSetting.value.currency_symbol;

    const loopBarcode = (product) => {
        let indents = [];
        for (let i = 0; i < product.quantity; i++) {
            indents.push(
                <div
                    key={i}
                    className={`${
                        paperSize.value === 9
                            ? " barcode-main__box-height6"
                            : ""
                    } barcode-main__barcode-item barcode-main__barcode-style`}
                >
                    <div className="fw-bolder lh-1 text-black ">
                        {barcodeOptions.companyName && companyName}
                    </div>
                    <div className="text-capitalize text-black ">
                        {barcodeOptions.productName && product.name}
                    </div>
                    {barcodeOptions?.price && (
                        <div className="text-capitalize text-black ">
                            <span className="fw-bolder">
                                {getFormattedMessage(
                                    "product.table.price.column.label"
                                )}
                                :
                            </span>{" "}
                            {currencySymbolHendling(
                                allConfigData,
                                currencySymbol,
                                product.product_price
                            )}
                        </div>
                    )}{" "}
                    <Image
                        src={product && product.barcode_url}
                        alt={product && product.name}
                        className="mh-100 "
                        style={{ width: "90px", height: "28px"}}
                    />
                    <div className="fw-bolder text-black ">
                        {product && product.code}
                    </div>
                </div>
            );
        }
        return indents;
    };

    return (
        <>
            {
                <div className="col-md-12 d-flex  justify-content-between flex-column overflow-auto">
                    {updated
                        ? updateProducts
                            ? updateProducts.map((product, index) => {
                                  return (
                                      <div
                                          className="barcode-main"
                                          id="demo"
                                          key={index}
                                      >
                                          {loopBarcode(product)}
                                      </div>
                                  );
                              })
                            : ""
                        : ""}
                </div>
            }
        </>
    );
};
export default BarcodeShow;
