import React from "react";
import { Wrapper } from "layout";
import Document from "./Document";
import Examples from "./Examples";

export default { title: "Data Entry|Form" };

export const View = () => <Wrapper title="Form" document={Document} examples={Examples} />;
