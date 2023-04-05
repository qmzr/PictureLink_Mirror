import { makeAutoObservable } from "mobx"

class UploadImageStore {
    uploadResponse = {}
    status = null

    constructor() {
        makeAutoObservable(this)
    }
  async postImageResponse(form){
    this.status = "loading"
    try {
      const response = await fetch("http://localhost:8080/image", {
        method: 'POST',
        body: form,
        headers: new Headers({}),
      },
      )
      const responseBody = await response.json();
      this.uploadResponse = responseBody
      console.log(responseBody, "this is response body");
      this.status = "complete"
    } catch(err){
      console.log(err)
      this.status = "fail"
    }
  }
}

export const store = new UploadImageStore()