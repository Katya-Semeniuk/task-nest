

const ProfilesList = ({profiles}) => {
console.log(profiles)
  return (
    <div>
     ProfilesList
      {/* {!assignedUsers ? (
                         <Loader />
                       ) : assignedUsers.length > 0 ? (
                         assignedUsers.map((user) => (
                           <option key={user.id} value={user.id}>
                             {user.owner}
                           </option>
                         ))
                       ) : (
                         <p>No users yet.</p>
                       )} */}
    </div>
  );
};
export default ProfilesList;
