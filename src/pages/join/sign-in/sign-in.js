import { JoinLayout } from "@/layouts";
import styles from "./sign-in.module.scss";
import Link from "next/link";
import { LoginForm } from "@/components/Auth";

export default function SignInPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Iniciar Sesión</h3>

          <LoginForm />

          <div className={styles.actions}>
            <Link href={"/join/sign-up"}>¿No tienes una cuenta?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
