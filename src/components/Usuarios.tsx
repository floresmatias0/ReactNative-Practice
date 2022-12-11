import { useUser } from "../hooks/useUsers";
import { User } from "../interfaces/reqRes";

export const Usuarios = () => {
  const { users, pageNext, pagePrev } = useUser();

  const renderItem = ({id, avatar, first_name, last_name, email}: User) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 50,
              borderRadius: 100
            }}
          />
        </td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  }
  
  return (
    <div>
        <h3>Usuarios:</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
              {users.map(renderItem)}
            </tbody>
        </table>
        <button
          className='btn btn-primary'
          onClick={pagePrev}
        >
          Anteriores
        </button>
        <button
          className='btn btn-primary'
          onClick={pageNext}
        >
          Siguientes
        </button>
    </div>
  )
};
