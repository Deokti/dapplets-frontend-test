import React, { useState } from "react";
import { TagsList } from "../../interfaces";
import { ITagsContext, TagsContext } from "./tags.context";

export const TagsContextProvider = ({ tags, children }: ITagsContext & { children: React.ReactNode }): React.ReactElement => {
	const [curentTags, setCurrentTags] = useState(tags);

	function setTags(newTags: TagsList) {
		setCurrentTags(newTags);
	}

	return (
		<TagsContext.Provider value={{ tags: curentTags, setTags }}>
			{children}
		</TagsContext.Provider>
	);
};
