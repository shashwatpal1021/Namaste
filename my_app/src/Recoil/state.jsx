import { atom, selector } from "recoil"


// Basic state Management
export const countState = atom({
  key: "countState",
  default: 0,
});

// Dervied State with selectors
export const doubleCountState = selector({
  key: "doubleCountState",
  get: ({ get }) => {
    const count = get(countState);
    return count * 2
  }
})

// Async Data with Recoil

export const userDataState = atom({
  key: "userDataState",
  default: [],
})

// export const fetchUserData = selector({
//   key: "fetchUserData",
//   get: async ({ get }) => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await res.json()
//     return data
//   }
// })

export const formDataState = atom({
  key: "formDataState",
  default: {
    name: "",
    email: "",
  }
})

export const postFormData = selector({
  key: "postFormData",
  set: async ({ set, get }, newData) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
    const result = await res.json();
    set(postResultState, result);
  }
})

export const postResultState = atom({
  key: "postResultState",
  default: null,
})