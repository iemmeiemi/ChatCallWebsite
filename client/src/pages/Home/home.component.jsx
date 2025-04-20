import React from "react";
import { useLoaderData, Form } from "react-router-dom";

//calling action with form, useSubmit, fetcher
//accessing action data using useActionData, fetcher.data

export const Component = () => {
  let data = useLoaderData();
  return (
    <div>
      <p>{data.message}</p>
      
      <Form method="post" navigate={false}>
        <input type="text" name="title" />
        <button type="submit">Create Todo</button>
      </Form>
    </div>
  );
};
