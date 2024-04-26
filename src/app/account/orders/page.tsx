import type { Metadata } from "next";
import { getServerSession } from "next-auth";

import authOptions from "@/utils/authOptions";
import AccountMenu from "../_components/AccountMenu";
import AccountMenuWeb from "../_components/AccountMenuWeb";

export const metadata: Metadata = {
  title: "Account user orders",
};

export default async function FavoritesPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="pb-14 md:pb-28">
      <h1 className="py-6 text-2xl md:py-12 md:text-4xl">My orders</h1>
      <AccountMenu
        email={session?.user.email || ""}
        username={session?.user.name || ""}
        location="orders"
      />
      <div className="flex gap-6">
        <AccountMenuWeb
          email={session?.user.email || ""}
          username={session?.user.name || ""}
          location="orders"
          className="w-[312px] flex-shrink-0"
        />
        <div className="mt-8 md:mt-0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          saepe illum corporis ducimus expedita aperiam reiciendis distinctio
          ad, repellendus architecto quia alias, error, nemo ex fugiat ipsum
          soluta fuga perferendis! Inventore, mollitia laborum sed error cumque
          dolorum atque harum sunt modi officiis asperiores minima laboriosam
          eius provident. Sequi vel tempora sapiente laborum vitae quo odit.
          Dicta architecto quia a obcaecati. Consequuntur dolor minima aut? Non
          ipsa consequatur veritatis dolor. Tempore modi optio eveniet dolor hic
          cupiditate possimus animi minima, qui, beatae harum eum perspiciatis
          sunt nobis a ipsum eius rem. Mollitia minima est odit vel eveniet
          eaque animi non labore, doloremque, aperiam, itaque enim
          exercitationem? Rerum omnis aspernatur aliquam doloribus nostrum
          quibusdam veniam quam delectus minima, et eius tempora consequuntur.
          Mollitia similique quod nobis et error. Recusandae omnis mollitia
          ducimus perspiciatis accusamus, sit totam molestiae ab fugiat error
          eos tenetur quis optio earum quo rem facilis accusantium enim delectus
          saepe! Atque soluta rem voluptate deleniti delectus! Iusto aliquid
          repellendus enim fugiat quis expedita minus harum, iure natus nemo id
          magni delectus suscipit rerum eligendi, architecto facilis ipsum
          consectetur repudiandae. Ex. Enim libero temporibus veritatis eligendi
          sunt nihil esse quisquam voluptates, dolorem provident rem fugit,
          sequi deserunt, pariatur eaque dolor delectus illum asperiores nam
          autem eius minus. Corrupti nisi quasi distinctio? Est cumque, a ad
          corporis repellat deserunt temporibus adipisci? Id adipisci, a, autem
          iusto in possimus, aspernatur ipsam molestiae eius consequatur
          consequuntur? Totam quas incidunt dolorem obcaecati enim est
          aspernatur. Nulla laudantium reprehenderit quos magni, odit deserunt
          culpa, sapiente quo, eligendi qui ut quasi! Mollitia alias nisi
          perferendis hic? Nihil modi est nulla amet ea saepe quam quibusdam
          cumque cum? Rem repudiandae necessitatibus molestias perferendis, quos
          ipsam delectus reiciendis ea maiores sapiente, doloremque tempora odit
          id eaque dolores quisquam cum. Asperiores amet non ullam error fugiat
          dolores aut. Repudiandae, in?
        </div>
      </div>
    </div>
  );
}
