import { makeObservable, observable, action, runInAction } from "mobx";
import { doFetch } from "../functions/doFetch";

// Contains State shared by all users
export class UserDataStore {
  email = "asdf";
  fullName = "fff";
  password = "password";

  set = (key, value) => {
    runInAction(() => {
      this[key] = value;
    });
  };

  getUserData = () => {
    const user = {
      email: this.email,
      fullName: this.fullName,
      password: this.password,
    };
    return user;
  };

  createUser = async () => {
    try {
      const userData = this.getUserData();

      console.log(userData);
      const res = await doFetch("createuser", userData);
      console.log(json);
      const json = await res.json();

      if (json.status === 200) {
        console.log("success");
      }

      return Promise.resolve(true);
    } catch (error) {
      this.set("errorMsg", error.message);
    }
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
