import { makeObservable, observable, action, runInAction } from "mobx";

// Contains State for single user (scrapping functional backened, beyond scope)
export class MetaDataStore {
  // access user and corresponding password via single index.
  // passwords stored in plain text, out of scope otherwise.
  users = [];
  passwords = [];

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
export const MetaStore = new MetaDataStore();
