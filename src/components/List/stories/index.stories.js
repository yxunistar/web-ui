import React from "react";
import { Wrapper } from "layout";
import Document from "./Document";
import Examples from "./Examples";

export default { title: "Data Display|List" };

export const View = () => <Wrapper title="List" document={Document} examples={Examples} />;
