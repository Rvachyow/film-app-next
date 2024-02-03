"use client"
import styles from "./styles.module.scss";
import { ListsTable } from "~/widgets/ListsTable/ListsTable";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export const ListsPage = () => {
  return (
    <main className={styles.lists}>
      <ListsTable></ListsTable>
    </main>
  );
};
