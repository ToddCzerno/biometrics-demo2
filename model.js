import { makeAutoObservable } from "mobx";
// import * as LocalAuthentication from "expo-local-authentication";
// import { useEffect } from "react";

class Store {
  authenticaded = true;

  constructor() {
    makeAutoObservable(this);
  }
}

export default Store;
