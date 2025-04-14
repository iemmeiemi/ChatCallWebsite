// interface LoaderFunctionArgs<Context> {
//     context?: Context;
//     params: Params<string>;
//     request: Request;
// } :params

export async function loader() {
  //   const res = await fetch(`/api/products/${params.pid}`);
  //   const product = await res.json();
  //   return product;
  return { message: "Hello, world!" };
}
