import { useCurrentUser } from "../../contexts/CurrentUserContext";

export const AssignedPage = () => {
    const currentUser = useCurrentUser();
      const profile_id = currentUser?.profile_id || "";
    //   console.log(profile_id)
  return (
    <div>
        <p>AssignedPage</p>
Owner {profile_id}
    </div>
  )
}

export default AssignedPage;