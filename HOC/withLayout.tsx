import React, { FunctionComponent } from "react";
import { IMenuContext } from "../context/menu/menu.context";
import { ITagsContext } from "../context/tags/tags.context";
import { TagsContextProvider } from "../context/tags/tags.provider";
import Layout from "../layouts/Layout";

export const withLayout = <T extends Record<string, unknown> & ITagsContext & IMenuContext>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): React.ReactElement {

		return (
			<TagsContextProvider tags={props.tags}>
				<Layout>
					<Component {...props} />
				</Layout>
			</TagsContextProvider>
		);
	};
};