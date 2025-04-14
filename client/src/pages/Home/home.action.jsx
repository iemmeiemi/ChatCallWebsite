// import { someApi } from "./api";
//sử dụng điều kiện để import nhiều function khác nhau

export async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");

  console.log("Received title:", title);
  return { ok: true };
  //   let project = await someApi.updateProject({ title });
  //       return project;
}
