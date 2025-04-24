import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap-v5";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { connect, useDispatch } from "react-redux";
import {
    posSearchCodeProduct,
    posSearchNameProduct,
} from "../../../store/action/pos/posfetchProductAction";
import useSound from "use-sound";
import {
    getFormattedMessage,
    placeholderText,
} from "../../../shared/sharedMethod";
import { addToast } from "../../../store/action/toastAction";
import { toastType } from "../../../constants";

const ProductSearchbar = (props) => {
    const {
        posAllProducts,
        customCart,
        setUpdateProducts,
        updateProducts,
        posSearchCodeProduct,
        posSearchNameProduct,
    } = props;
    const [searchString, setSearchString] = useState("");
    const [keyDown, setKeyDown] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const dispatch = useDispatch();
    const [play] = useSound(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    );

    // Filter products with stock > 0
    const filterProduct = posAllProducts
        .filter((qty) => qty.attributes.stock.quantity > 0)
        .map((item) => ({
            name: item.attributes.name,
            code: item.attributes.code,
            id: item.id,
        }));

    const formatResult = (item) => {
        return (
            <span style={{ display: "block", textAlign: "left" }}>
                {item.code} ({item.name})
            </span>
        );
    };

    // Function to find product by exact barcode match
    const findProductByBarcode = (barcode) => {
        return posAllProducts.find(
            (product) => product.attributes.code === barcode
        );
    };

    const handleProduct = (product) => {
        const stockQuantity = product.attributes.stock.quantity;
        const productCode = product.attributes.code;

        // Check if product already exists in cart
        const existingProduct = updateProducts.find(
            (item) => item.code === productCode
        );

        if (existingProduct) {
            if (existingProduct.quantity >= stockQuantity) {
                dispatch(
                    addToast({
                        text: getFormattedMessage(
                            "pos.quantity.exceeds.quantity.available.in.stock.message"
                        ),
                        type: toastType.ERROR,
                    })
                );
                return false;
            }

            setUpdateProducts((currentProducts) =>
                currentProducts.map((item) =>
                    item.code === productCode
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            const newProduct = customCart.find(
                (item) => item.code === productCode
            );
            if (newProduct) {
                setUpdateProducts([
                    ...updateProducts,
                    { ...newProduct, quantity: 1 },
                ]);
            }
        }

        posSearchCodeProduct(productCode);
        play();
        return true;
    };

    const handleOnSearch = (string) => {
        setSearchString(string);

        // Always show results while typing
        const filteredResults = filterProduct.filter(
            (item) =>
                item.code.toLowerCase().includes(string.toLowerCase()) ||
                item.name.toLowerCase().includes(string.toLowerCase())
        );
        setSearchResults(filteredResults);

        // Check for exact barcode match
        if (string.length >= 4) {
            // Only check for complete barcodes
            const exactMatch = findProductByBarcode(string);
            if (exactMatch && exactMatch.attributes?.stock?.quantity > 0) {
                const success = handleProduct(exactMatch);
                if (success) {
                    setSearchString("");
                    setSearchResults([]);
                }
            }
        }
    };

    const handleOnSelect = (item) => {
        const exactMatch = findProductByBarcode(item.code);
        if (exactMatch && exactMatch.attributes?.stock?.quantity > 0) {
            const success = handleProduct(exactMatch);
            if (success) {
                setSearchString("");
                setSearchResults([]);
            }
        }
    };

    const inputFocus = () => {
        let searchInput = document.querySelector(
            'input[data-test="search-input"]'
        );
        searchInput?.focus();
    };

    useEffect(() => {
        const keyDownHandler = (event) => {
            if (event.altKey && event.code === "KeyQ") {
                event.preventDefault();
                inputFocus();
            }
        };

        document.addEventListener("keydown", keyDownHandler);
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, []);

    return (
        <Col className="position-relative my-3 search-bar col-xxl-8 col-lg-12 col-12">
            <ReactSearchAutocomplete
                placeholder={placeholderText("pos-globally.search.field.label")}
                items={searchResults}
                onSearch={handleOnSearch}
                inputSearchString={searchString}
                onSelect={handleOnSelect}
                formatResult={formatResult}
                showIcon={false}
                showClear={false}
                autoFocus={true}
                fuseOptions={{
                    keys: ["name", "code"],
                    threshold: 0.3,
                    ignoreLocation: true,
                }}
                styling={{
                    zIndex: 2,
                    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
                    borderRadius: "4px",
                    height: "44px",
                    placeholder: {
                        color: "#6c757d",
                    },
                }}
            />
            <i className="bi bi-search fs-2 react-search-icon position-absolute top-0 bottom-0 d-flex align-items-center ms-2" />
        </Col>
    );
};

const mapStateToProps = (state) => {
    const { posAllProducts } = state;
    return { posAllProducts };
};

export default connect(mapStateToProps, {
    posSearchCodeProduct,
    posSearchNameProduct,
})(ProductSearchbar);