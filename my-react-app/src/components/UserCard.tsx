type UserProps = {
  user: {
    name: string;
    email: string;
  };
};
export const UserCard = ({ user }: UserProps) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};
