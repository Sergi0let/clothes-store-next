import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import { DeleteBtn } from "../_components/ProductAction";
import { deleteUser } from "../actions";

export default async function UserPage() {
  const users = await prisma.user.findMany();

  if (users == null) {
    return <div>Not found</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-20 w-20">
                      <Image
                        src={user.image || ""}
                        alt={user.name || ""}
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.email}</div>
                  </div>
                </div>
              </td>

              <th>
                <div className="dropdown">
                  <button className="btn btn-accent btn-sm text-base-100">
                    Action
                  </button>
                  <ul className="menu dropdown-content z-[1] w-32 rounded-box bg-base-100 p-2 shadow">
                    <li>
                      <a>something</a>
                    </li>
                    <li>
                      <DeleteBtn id={user.id} fnDel={deleteUser} />
                    </li>
                  </ul>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
