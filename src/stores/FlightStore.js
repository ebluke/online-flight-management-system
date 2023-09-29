import { makeObservable, observable, action, runInAction } from "mobx";

export class FlightDataStore {
  // Going to hardcode this likelky
  flightNumber = "";
  depTime = "";
  arrTime = "";
  

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
export const FlightStore = new FlightDataStore();
