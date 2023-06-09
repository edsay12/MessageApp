import { User } from "@prisma/client";

import Image from "next/image";

type PropTypes = {
  user: User;
};

function Avatar({ user }: PropTypes) {
  return (
    <>
      Avatar a lenta de nunu
      <div>
        
        <Image alt="Avatar" src={user?.image || '/images/placeholder.jpg'} width={50} height={50}/>
      </div>
    </>
  );
}

export default Avatar;
