import { Button, Icon, Label } from "semantic-ui-react";
import styles from "./Account.module.scss";
import { useRouter } from "next/router";
import { useAuth, useCart } from "@/hooks";
import classNames from "classnames";

export function Account() {
  const { user } = useAuth();
  const router = useRouter();
  const { total } = useCart();

  const goToLogin = () => router.push("/join/sign-in");
  const goToAccount = () => router.push("/account");

  const goToCart = () => {
    if (!user) goToLogin();
    else router.push("/cart");
  };

  return (
    <div className={styles.account}>
      <Button icon className={styles.cart}>
        <Icon name="cart" onClick={goToCart} />
        {total > 0 && <Label circular>{total}</Label>}
      </Button>

      <Button icon className={classNames({ [styles.user]: user })}>
        <Icon name="user outline" onClick={user ? goToAccount : goToLogin} />
      </Button>
    </div>
  );
}
