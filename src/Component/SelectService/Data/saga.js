import { call, put } from "redux-saga/effects";
import { BASE_API_ENDPOINT } from "../../../constant";

export function* fetchPackages({payload}) {
    yield put({ type: "FETCH_PACKAGES" });
    try {
        const { data } = yield call(getPackages, payload?.carId);
        yield put({
            type: 'FETCH_PACKAGES_SUCCESS',
            data: formatPackageResponse(data)
        });
    } catch (error) {
        yield put({
            type: 'FETCH_PACKAGES_FAILED',
            error
        });
    }
}

async function getPackages(...args) {
    try {
        const response = await fetch(`${BASE_API_ENDPOINT}/packages/`);
        return response.json()
    } catch (error) {
        console.log(error);
        /**
         * 
         */
    }
}

function formatPackageResponse(response = []) {
    const formattedResponse = {
        "autoCare": [],
        "doorStep": []
    }
    if (response.length > 0) {
        response.forEach((servicePackage = {}) => {
            if (servicePackage["serviceableAtHome"]) {
                formattedResponse["doorStep"] = [...formattedResponse["doorStep"], getPackageInfo(servicePackage)];
            } else {
                formattedResponse["autoCare"] = [...formattedResponse["autoCare"], getPackageInfo(servicePackage)]
            }
        })
    }
    return formattedResponse;
}

function getPackageInfo(servicePackage = {}) {
    const packageData = {
        id: servicePackage["id"],
        images: servicePackage["images"] || [],
        label: servicePackage["packageName"],
        code: servicePackage["code"],
        desc: servicePackage["desc"] || "",
        serviceMap: servicePackage["services"].reduce((accumlator, currentService) => {
            const { id = "" } = currentService;
            if (id) {
                accumlator = {
                    ...accumlator,
                    [id]: currentService
                }
            }
            return accumlator
        }, {})
    };

    return {
        ...packageData,
        packages: servicePackage["subPackages"].reduce((accumalator, subPackageData = {}) => {
            const { name = "", serviceTime = 0,
                images = [], price = "",
                code = "", customInfo = [],
                serviceIds = []
            } = subPackageData;
            accumalator = [
                ...accumalator,
                {
                    name,
                    serviceTime,
                    images,
                    price,
                    code,
                    services : serviceIds.map((id) => packageData["serviceMap"][id] || {})
                }
            ]
            return accumalator;
        }, [])
    }
}