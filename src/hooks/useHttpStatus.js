import {useEffect, useState} from "react";


function useHttpStatus() {

    const [status, _setStatus] = useState({
        isLoading: false,
        message: "",
        isSuccess: false,
    })

    const objectStatus = {
        set isLoading(value) {
            _setStatus(prev => ({
                ...prev,
                isLoading: value

            }))
        },
        get isLoading() {
            return status.isLoading
        },


        set message(value) {
            _setStatus(prev => ({
                ...prev,
                message: value

            }))
        },
        get message() {
            return status.message
        },

        set isSuccess(value) {
            _setStatus(prev => ({
                ...prev,
                isSuccess: value

            }))
        },
        get isSuccess() {
            return status.isSuccess
        },

        reset() {
            _setStatus({
                isLoading: false,
                message: "",
                isSuccess: false
            })
        }
    }




    return objectStatus
}

export default useHttpStatus