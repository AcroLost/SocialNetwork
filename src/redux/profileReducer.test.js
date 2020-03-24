import profileReducer, { addPostActionCreator, deletePostAC } from "./profileReducer";

const state = {
    postsData: [
        { id: 1, message: 'Hi', likesCount: 10 },
        { id: 2, message: 'first post', likesCount: 15 }
    ]
}

it('new post added', () => {

    // 1. start data
    let action = addPostActionCreator('come on');


    // 2. action

    let newState = profileReducer(state, action);

    // 3.  expectation
    expect(newState.postsData.length).toBe(3);
});

it('new post should be come on', () => {

    // 1. start data
    let action = addPostActionCreator('come on');

    // 2. action

    let newState = profileReducer(state, action);

    // 3.  expectation
    expect(newState.postsData[1].message).toBe('first post');
});

it('length after delete should be decrement', () => {

    // 1. start data
    let action = deletePostAC(1);

    // 2. action

    let newState = profileReducer(state, action);

    // 3.  expectation
    expect(newState.postsData.length).toBe(1);
});

it('length after delete shouldn\'t be decrement if id is incorrect', () => {

    // 1. start data
    let action = deletePostAC(1000);

    // 2. action

    let newState = profileReducer(state, action);

    // 3.  expectation
    expect(newState.postsData.length).toBe(2);
});


