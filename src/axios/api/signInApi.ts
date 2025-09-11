import AxiosBase from "../base";

class SignInApi extends AxiosBase {
  //   constructor(interceptors: Array<any>) {
  //     super(interceptors);
  //   }

  public async signIn(payload: any) {
    console.log("payload", payload);
  }
}
const signInApi = new SignInApi();

export default signInApi;
