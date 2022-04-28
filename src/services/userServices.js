
import apiService from "../utils/apiService"
import { rootStore } from "../store"
import { toJS } from 'mobx';
export const LoginAction = (data) => {

    return new Promise((resolve, reject) => {
        apiService(toJS(rootStore.mainStore.getENV().API_URL) + "/oauth/token?username=pockyjr&password=123456&grant_type=password&scope=all&client_id=baogam00-769c-4f16-b934-7e4fd4036db1", { data, method: "POST" })
            .then((res) => {
                return resolve(res);
            })
            .catch((err) => {
                return reject(err);
            });
    })
}