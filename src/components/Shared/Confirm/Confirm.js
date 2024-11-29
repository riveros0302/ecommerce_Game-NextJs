import { Confirm as ConfirmSU } from "semantic-ui-react";

export function Confirm(props) {
  const { ...rest } = props; //...rest se usa para los props "no controlados" o para entender, los que no se sacan en los {}, para no escribir todo ej: {text, title}, etc. se pone {...res} para sacarlos todos de una

  return <ConfirmSU className="confirm" size="mini" {...rest} />;
}
