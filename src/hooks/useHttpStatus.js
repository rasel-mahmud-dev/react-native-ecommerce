import {useState} from "react";

/**
 *
 * @returns {({isLoading: boolean, message: string, isSuccess: boolean}|setStatus|resetStatus)[]}
 */
function useHttpStatus() {

    const [status, _setStatus] = useState({
        isLoading: false,
        message: "",
        isSuccess: false
    })


    /**
     *
     * @param isLoading
     * @param message
     * @param isSuccess
     */
    function setStatus(isLoading = undefined, message = undefined,  isSuccess = undefined) {
        _setStatus(prev => ({
            ...prev,
            isLoading: isLoading !== undefined ? isLoading : prev.isLoading,
            message: message !== undefined ? message : prev.message,
            isSuccess: isSuccess !== undefined ? isSuccess : prev.isSuccess,
        }))
    }

    function resetStatus() {
        _setStatus({
            isLoading: false,
            message: "",
            isSuccess: false
        })
    }

    return [status, setStatus, resetStatus]
}

export default useHttpStatus