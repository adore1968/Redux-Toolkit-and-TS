import { useGetUsersQuery } from "../redux/api/usersApi";
import Loading from "./Loading";
import UserItem from "./UserItem";

function UserList() {
  const { isLoading, isFetching, error, data } = useGetUsersQuery(null);

  if (isLoading || isFetching) return <Loading />;

  if (error) console.log(error);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {data?.map((value) => (
        <UserItem key={value.email} value={value} />
      ))}
    </div>
  );
}

export default UserList;
