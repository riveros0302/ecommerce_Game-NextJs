import classNames from "classnames";
import styles from "./WishlistIcon.module.scss";
import { Wishlist } from "@/api";
import { Icon } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/hooks";

const wishlistCtrl = new Wishlist();

export function WishlistIcon(props) {
  const { gameId, className, removeCallback } = props;
  const { user } = useAuth();

  const [hasWishlist, setHasWishlist] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await wishlistCtrl.check(user.id, gameId);
        setHasWishlist(response);
      } catch (error) {
        setHasWishlist(false);
        console.error(error);
      }
    })();
  }, [gameId]);

  const addWishlist = async () => {
    const response = await wishlistCtrl.add(user.id, gameId);
    setHasWishlist(response);
  };

  const deleteWishlist = async () => {
    try {
      await wishlistCtrl.delete(hasWishlist.id);
      setHasWishlist(false);

      if (removeCallback) {
        removeCallback();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (hasWishlist === null) return null;

  return (
    <Icon
      name={hasWishlist ? "heart" : "heart outline"}
      onClick={hasWishlist ? deleteWishlist : addWishlist}
      className={classNames(styles.wishlistIcon, {
        [className]: className,
      })}
    />
  );
}
