export { default as LoginScreen } from './screens/Login'
import { rootStore } from './store';
export const setObj = (obj) => {
  console.log("set store", obj);
  rootStore.mainStore.setENV(obj)
}