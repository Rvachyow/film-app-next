"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { ActorsCard } from "~/shared/ui/ActorsCard/ActorsCard";
import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  getKeyValue,
} from "@nextui-org/react";

import styles from "./styles.module.scss";
import { Person } from "~/pages/TitlePage/types";

export const users = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
  {
    key: "5",
    name: "Emily Collins",
    role: "Marketing Manager",
    status: "Active",
  },
  {
    key: "6",
    name: "Brian Kim",
    role: "Product Manager",
    status: "Active",
  },
  {
    key: "7",
    name: "Laura Thompson",
    role: "UX Designer",
    status: "Active",
  },
  {
    key: "8",
    name: "Michael Stevens",
    role: "Data Analyst",
    status: "Paused",
  },
  {
    key: "9",
    name: "Sophia Nguyen",
    role: "Quality Assurance",
    status: "Active",
  },
  {
    key: "10",
    name: "James Wilson",
    role: "Front-end Developer",
    status: "Vacation",
  },
  {
    key: "11",
    name: "Ava Johnson",
    role: "Back-end Developer",
    status: "Active",
  },
  {
    key: "12",
    name: "Isabella Smith",
    role: "Graphic Designer",
    status: "Active",
  },
  {
    key: "13",
    name: "Oliver Brown",
    role: "Content Writer",
    status: "Paused",
  },
  {
    key: "14",
    name: "Lucas Jones",
    role: "Project Manager",
    status: "Active",
  },
  {
    key: "15",
    name: "Grace Davis",
    role: "HR Manager",
    status: "Active",
  },
  {
    key: "16",
    name: "Elijah Garcia",
    role: "Network Administrator",
    status: "Active",
  },
  {
    key: "17",
    name: "Emma Martinez",
    role: "Accountant",
    status: "Vacation",
  },
  {
    key: "18",
    name: "Benjamin Lee",
    role: "Operations Manager",
    status: "Active",
  },
  {
    key: "19",
    name: "Mia Hernandez",
    role: "Sales Manager",
    status: "Paused",
  },
  {
    key: "20",
    name: "Daniel Lewis",
    role: "DevOps Engineer",
    status: "Active",
  },
  {
    key: "21",
    name: "Amelia Clark",
    role: "Social Media Specialist",
    status: "Active",
  },
  {
    key: "22",
    name: "Jackson Walker",
    role: "Customer Support",
    status: "Active",
  },
  {
    key: "23",
    name: "Henry Hall",
    role: "Security Analyst",
    status: "Active",
  },
  {
    key: "24",
    name: "Charlotte Young",
    role: "PR Specialist",
    status: "Paused",
  },
  {
    key: "25",
    name: "Liam King",
    role: "Mobile App Developer",
    status: "Active",
  },
];

interface IActorsTable {
  dataActors: Person[];
}

export const ActorsTable = ({ dataActors }: IActorsTable) => {
  console.log(dataActors, "test");
  
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
