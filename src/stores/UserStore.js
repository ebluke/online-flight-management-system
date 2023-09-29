import { makeObservable, observable, action, runInAction } from "mobx";

// Contains State for single user (scrapping functional backened, beyond scope)
export class UserDataStore {
  isLoggedIn = false;
  email = "";
  fullName = "";
  password = "";

  set = (key, value) => {
    runInAction(() => {
      this[key] = value;
    });
  };

  constructor() {
    makeObservable(this, {
      email: observable,
      fullName: observable,
      password: observable,

      set: action,
    });
  }
}
export const UserStore = new UserDataStore();
