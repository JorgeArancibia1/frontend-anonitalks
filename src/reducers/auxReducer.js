const FAKE_POSTS=[{
  user: 'Incidunt accusamus et tenetur.' , 
  title: 'Ratione ea ex illo.' , 
  content: 'ut' , 
  id: 1, 
},
{
  user: 'Molestiae modi sed ipsa amet aut pariatur dolorem eius velit.' , 
  title: 'Corrupti ipsa consequatur esse est numquam quo.' , 
  content: 'quia' , 
  id: 2 , 
},
{
  user: 'Dolore voluptate assumenda nisi nobis necessitatibus qui praesentium nisi.' , 
  title: 'Error dicta voluptas accusantium in.' , 
  content: 'nobis' , 
  id:3 , 
},
{
  user: 'Quos facilis non.' , 
  title: 'Impedit necessitatibus cum earum placeat qui et facere.' , 
  content: 'voluptatem' , 
  id: 4 , 
},
{
  user: 'Provident enim sint asperiores iste ut ea qui.' , 
  title: 'Fugiat consequatur sunt dolore labore saepe.' , 
  content: 'aut' , 
  id: 5 , 
},
{
  user: 'Temporibus explicabo aliquid earum eveniet quasi omnis occaecati tenetur.' , 
  title: 'Culpa repudiandae corrupti nihil illum iure fugiat.' , 
  content: 'ipsam' , 
  id:6, 
}]

const modal = {
  OPEN: 'OPEN_MODAL',
  CLOSE: 'CLOSE_MODAL'
}


const initialState = {
  posts: FAKE_POSTS,
  selectedPost: {},
  openModal: false,
  type: 'create'
};

export const auxState = (state = initialState, action) => {
  switch (action.type) {
    case modal.OPEN:
      return {
        ...state,
        selectedPost: action.payload.content,
        type: action.payload.type,
        openModal: true
      };
    case modal.CLOSE:
      return {
        ...state,
        selectedPost: {},
        type: 'create',
        openModal: false
      };
    default:
      return state;
  }
};
