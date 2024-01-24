
export const getLocalStreamPermission = async (setPermissionStatus) => {
    return await navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
}

export const  status = {
    LOADING :  'Loading',
    DENIED: 'Denied',
    ALLOWED: 'Allowed'
};
