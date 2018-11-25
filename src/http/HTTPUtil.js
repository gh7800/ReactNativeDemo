/**
 * 基于 fetch 封装的 GET请求
 * @param url
 * @param params {}
 * @param headers
 * @returns {Promise}
 */
import StoreUtil from "../utils/StoreUtil";
import Constans from "../utils/Constans";


let HTTPUtil = {};
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI5ZWMwMzZhYTUyNjg2Mzg0Y2RjM2IwYTc1OWFkMmRmNWMzYTFlY2ViYWJjMmEyNDI5ODhlMzM4MGUxODI2ODFhZDQ2NTY4N2ViYTQ0OWRhIn0.eyJhdWQiOiIxIiwianRpIjoiYjllYzAzNmFhNTI2ODYzODRjZGMzYjBhNzU5YWQyZGY1YzNhMWVjZWJhYmMyYTI0Mjk4OGUzMzgwZTE4MjY4MWFkNDY1Njg3ZWJhNDQ5ZGEiLCJpYXQiOjE1NDI5NTgxNzYsIm5iZiI6MTU0Mjk1ODE3NiwiZXhwIjoxNTc0NDk0MTc2LCJzdWIiOiI3QjJDNzQ2OS05NEE5LURFMTEtRDVFQi05NkVEMTIyMDQ2RjciLCJzY29wZXMiOlsiKiJdfQ.U0Rpig9CRGoG3nCe5SYx97n5-7YTVL1LjZTEYdqQq71w6gh1qcnADv1GEZ6GnilQkKj0Jgs9pOfOmfy7XMimBEtRBSO0FCJeuwAWgc4S2Yb0ZsxzYeyqJcHSdpi7QhbQM13E0ND3wfwrMOUS4T6D9BFbG0bE6ha0_MWPDBWAmpDW8-HFcGCnVzsVreEZ7B-RQFz6DtH9qBR5NFi-tgwAphY2FIHhHofMsSCXp4s9Q3LP2cpRNxTpDD27WnLpDhu3HmrcN1mWFOz2SDBuU2fK89OpZREfdtVtul8B8OZnNz8uWVrb4VffdyqbK5pFLLB0DnLBSn138rX0c7iB88W_WCwvpOeZlS4cWKzOj_AI7V3ms6nr5jKtkipkZBHly3Akdpe_7Imi1wtCpq8bk3G3IuPVqAbacl9wuVFDJzj22kHOCu6gyKtTcmYrHTPPJ_AF35C2ae4DRgsi-jnKdBZ8JGBNkKejFiXJzho_Gfq-tLgPNIQuqEvfAHjnsc5bEdDzSNW01uIxzX0f5InpmmafnGSbGHdQnZx6xvpXsKrA227bn5sugEsIp5TrwHXvDEPVNYY_ebp05JYOQM3aRHLFRtHpV7MLPd6FiMjGlueMFRa3OHHHsnpFFrpuhxw3eSMTf8bx0AOtWA_MZ3cywVu51r5ZpNeRfazvTmHdC0BGRMw';
StoreUtil.getKeyData(Constans.TOKEN,(token)=>{
    //token : token
});
console.log('HTTPUtil:',token);

let headers = {
    method: 'POST',
    headers: {
        'client-type': 'watch',
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`,// ``不是单引号
    }
};

HTTPUtil.get = function(url, params) {
    if (params) {
        let paramsArray = [];
        //encodeURIComponent
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'GET',
            headers: headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
                reject({status:-1});
            })
    })
}


/**
 * 基于 fetch 封装的 POST请求  FormData 表单数据
 * @param url
 * @param formData
 * @param headers
 * @returns {Promise}
 */
HTTPUtil.post = function(url, formData) {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            headers: headers,
            body:formData,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
                reject({err});
            })
    })
}

export default HTTPUtil;