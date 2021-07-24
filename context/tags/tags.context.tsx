import { createContext } from "react";
import { TagsList } from "../../interfaces";

export interface ITagsContext {
	tags: TagsList
	setTags?: (newTags: TagsList) => void
}

export const TagsContext = createContext<ITagsContext>({ tags: [] });
