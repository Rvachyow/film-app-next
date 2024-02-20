"use client";;
import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

import styles from "./styles.module.scss";
import { Person } from "~/full-page/TitlePage/types";

interface IActorsTable {
  dataActors: Person[];
}

export const ActorsTable = ({ dataActors }: IActorsTable) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(dataActors.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return dataActors.slice(start, end);
  }, [page, dataActors]);

  return (
    <div className={styles.table}>
      <h4>Актеры</h4>
      <Table
        color="primary"
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              className={styles.pagination}
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          <TableColumn key="name">{""}</TableColumn>
          <TableColumn key="role">ROLE</TableColumn>
          <TableColumn key="status">ACTOR</TableColumn>
        </TableHeader>
        <TableBody
          style={{ backgroundColor: "#180828", borderRadius: "10px" }}
          items={items}
        >
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>
                <img
                  src={item.photo}
                  alt=""
                  width={50}
                  height={50}
                />
              </TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.enName}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
