import { ListsTable } from "~/widgets/ListsTable/ListsTable";
import styles from "./styles.module.scss";

export const ListsPage = () => {
  return (
    <main className={styles.lists}>
      <ListsTable />
    </main>
  );
};
