import _ from "lodash"

export const updateObject = (state, content) => {
    let index = _.findIndex(state.posts, {id: content.id});
    const newArray = state.posts.splice(index, 1, content);

    return newArray
}