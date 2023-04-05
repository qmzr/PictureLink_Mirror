export function PostImageResponse(form){
  const response = fetch("http://localhost:8080/image", {
    method: 'POST',
    body: form,
    headers: new Headers({}),
  },
  )
  const responseBody = response.json();
  console.log(responseBody.data, "this is response body");
  return responseBody
}