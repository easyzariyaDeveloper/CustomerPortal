import { takeLatest } from "redux-saga/effects";
import { fetchPackages, fetchCars, fetchCities, fetchPackageById, addSubPackage, setCarToCart } from "../Component/SelectService/Data/saga";
import { fetchBrandForCars, fetchCarListByBrand, addCarByUser, getCarById} from "../Component/AddCar/Data/saga";
import { loginUser, userSignup, getResetPasswordOtp, verifyResetPasswordOtp } from "../Component/SignUp/Data/saga";
import { getProfile, changePassword, deleteCar, deleteAddress, fetchOrderHistory } from "../Component/Profile/Data/saga";
import { createOtp, verifyOTP } from "../Component/OtpPage/Data/saga";
import { addAddressByUser, updateCustomerAddress } from "../Component/Address/Data/saga";
import { fetchCart, hasActiveCart, deleteItem, applyCoupon, navigateToSelectAddress, removeCoupon } from "../Component/Cart/Data/saga";
import { createOrder, setShippingAddress } from "../Component/CheckOutCart/MobileView/Data/saga";
import { fetchOrderById } from "../Component/OrderDetails/Data/saga";


export default function* appSaga() {
    yield takeLatest("REQUEST_PACKAGES_DATA", fetchPackages);
    yield takeLatest("REQUEST_PACKAGES_DATA_BY_ID", fetchPackageById);
    yield takeLatest("REQUEST_CAR", fetchCars);
    yield takeLatest("REQUEST_CITY", fetchCities);
    yield takeLatest("ADD_SUBPACKAGE",addSubPackage);
    yield takeLatest("ADD_CAR_TO_CART",setCarToCart);

    yield takeLatest("FETCH_BRAND_FOR_CARS", fetchBrandForCars );
    yield takeLatest("FETCH_CAR_LIST_BY_BRAND",fetchCarListByBrand);
    yield takeLatest("FETCH_CAR_BY_ID", getCarById);

    yield takeLatest("LOGIN_USER_WITH_CRENDETIAL", loginUser);
    yield takeLatest("SIGNUP_USER_DETAILS", userSignup);

    yield takeLatest("FETCH_PROFILE", getProfile);
    yield takeLatest("FETCH_ORDER_HISTORY", fetchOrderHistory);
    yield takeLatest("FETCH_ORDER_BY_ID", fetchOrderById);
    yield takeLatest("CREATE_OTP", createOtp);
    yield takeLatest("VERIFY_OTP", verifyOTP);
    yield takeLatest("RESET_PASSWORD_CREATE_OTP", getResetPasswordOtp);
    yield takeLatest("VERIFY_RESET_PASSWORD_OTP", verifyResetPasswordOtp);


    yield takeLatest("CUSTOMER_ADD_ADDRESS", addAddressByUser);
    yield takeLatest("CUSTOMER_ADD_CAR", addCarByUser);
    yield takeLatest("DELETE_CAR", deleteCar);
    yield takeLatest("DELETE_ADDRESS", deleteAddress);
    yield takeLatest("CUSTOMER_UPDATE_ADDRESS", updateCustomerAddress);




    yield takeLatest("FETCH_ACTIVE_CART_DETAIL", hasActiveCart);
    yield takeLatest("FETCH_CART_DETAILS", fetchCart);
    yield takeLatest("DELETE_ITEM", deleteItem);
    yield takeLatest("APPLY_COUPON", applyCoupon);
    yield takeLatest("REMOVE_COUPON", removeCoupon);
    yield takeLatest("CREATE_ORDER", createOrder);
    yield takeLatest("NAVIGATE_SELECT_ADDRESS_PAGE", navigateToSelectAddress);
    yield takeLatest("SET_SHIPPING_ADDRESS", setShippingAddress);


    yield takeLatest("CHANGE_PASSWORD", changePassword);
}
