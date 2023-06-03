import { json } from "stream/consumers";

import * as S from "./style";
import { Logo } from "@/components/Logo";
import { AuthForm } from "./components/authForm";

export default async function Home() {
  return (
    <S.AuthPageContainer>
      <div className="header">
        <Logo width={48} height={48} />
        Sign in to your account
      </div>

      <AuthForm />
    </S.AuthPageContainer>
  );
}
