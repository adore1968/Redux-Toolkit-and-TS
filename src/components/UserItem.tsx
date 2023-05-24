import { User } from "../shared/interfaces";

type Props = { value: User };

function UserItem({ value }: Props) {
  return (
    <div className="flex flex-col gap-2.5 bg-slate-700 p-5">
      <h4 className="text-xl font-bold sm:text-2xl">{value.name}</h4>
      <p className="text-lg sm:text-xl">{value.username}</p>
      <p className="text-lg sm:text-xl">{value.email}</p>
    </div>
  );
}

export default UserItem;
