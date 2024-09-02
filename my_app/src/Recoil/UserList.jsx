import { useRecoilValue } from "recoil"
import { fetchUserData } from "./state"

export const UserList = () => {
  const users = useRecoilValue(fetchUserData);

  return (
    <>
      <hr />
      Recoil User
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}