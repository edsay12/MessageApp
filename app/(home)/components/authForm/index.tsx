"use client";

import { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/Inputs";
import { FaEnvelope, FaGithub, FaGoogle, FaLock, FaUser } from "react-icons/fa";
import { Button } from "@/components/Button";
import { LineThought } from "@/components/lineThought/lineThought";
import { SocialButton } from "../socialButton";
import * as S from "./styled";
import { ButtonsContainer } from "@/components/ButtonContainer";
import axios from "axios";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type VarientType = "LOGIN" | "REGISTER";
type SocialAction = "GITHUB" | "GOOGLE";

export function AuthForm() {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariante] = useState<VarientType>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/users");
    }
  }, [session.status, router]);
  const schema = z
    .object({
      email: z.string().email({ message: "The email must be valid" }),
      password: z
        .string()
        .min(5, { message: "Password must contain ate least 5 caracters" }),
      name: z.string().refine(
        (value) => {
          if (variant === "REGISTER") {
            return value.length >= 5; // e obrigatorio
          } else {
            return true; // Não e obrigatorio
          }
        },
        { message: "Name must contain ate least 5 caracters" }
      ),
    })
    .transform((fields) => {
      return {
        ...fields,
        name: variant === "REGISTER" ? fields.name : "",
      };
    });

  type formProps = z.infer<typeof schema>;

  const toogleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariante("REGISTER");
    } else {
      setVariante("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProps>({
    resolver: zodResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const handleForm = (data: formProps) => {
    console.log(data);
    setIsLoading(true);

    if (variant === "REGISTER") {
      setIsLoading(true);
      axios
        .post("/api/register", data)
        .then(() => {
          toast.success("Success,enter in you account");
          setVariante('LOGIN')
          reset();
        })
        .catch((e) => {
          toast.error("something went wrong");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // cledential e o nome do provider
    // o redirect false evita de sermos redirecionado
    if (variant === "LOGIN") {
      setIsLoading(true);
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((cb) => {
          if (cb?.error) toast.error("invalid credentials");
          if (cb?.ok && !cb.error) {
            toast.success("Logged In");
            router.push("/users");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const socialAction = (action: SocialAction) => {
    setIsLoading(true);
    if (action === "GITHUB") {
      signIn("github", {
        redirect: false,
      })
        .then((cb) => {
          if (cb?.error) toast.error("Something went wrog");
          if (cb?.ok && !cb.error) {
            toast.success("Wow, success");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    if (action === "GOOGLE") {
      setIsLoading(true);
      signIn("google", {
        redirect: false,
      })
        .then((cb) => {
          if (cb?.error) toast.error("Something went wrog");
          if (cb?.ok && !cb.error) toast.success("Wow, success");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <S.AuthFormContainer>
        <form onSubmit={handleSubmit(handleForm)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              type="text"
              errorMessage={errors.name?.message && errors.name?.message}
              leftIcon={<FaUser />}
              register={register}
            />
          )}

          <Input
            id="email"
            label="email"
            type="text"
            errorMessage={errors.email?.message && errors.email?.message}
            leftIcon={<FaEnvelope />}
            register={register}
          />

          <Input
            id="password"
            label="password"
            errorMessage={errors.password?.message && errors.password?.message}
            type="password"
            leftIcon={<FaLock />}
            register={register}
          />
          <Button type="submit" isDisable={isLoading} size="Full">
            Entrar
          </Button>

          <LineThought>Or Continue With</LineThought>
        </form>
        <ButtonsContainer>
          <SocialButton
            onClick={() => socialAction("GITHUB")}
            size="Full"
            icon={<FaGithub />}
          />

          <SocialButton
            onClick={() => socialAction("GOOGLE")}
            size="Full"
            icon={<FaGoogle />}
          />
        </ButtonsContainer>
        <S.VariationToggleContainer>
          <div className="message">
            {variant === "LOGIN" ? (
              <p>New to message ?</p>
            ) : (
              <p>I already have a acount</p>
            )}
          </div>
          <div className="toggle" onClick={toogleVariant}>
            {variant === "REGISTER" ? <p>Login</p> : <p>Register</p>}
          </div>
        </S.VariationToggleContainer>
      </S.AuthFormContainer>
    </>
  );
}
