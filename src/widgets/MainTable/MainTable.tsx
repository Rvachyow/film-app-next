"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export const MainTable = () => {
  return (
    <div className="min-w-fit">
      <h3>Box office receipts for the weekend</h3>
      <Table removeWrapper>
        <TableHeader>
          <TableColumn className="bg-purple-500 text-white">NAME</TableColumn>
          <TableColumn className="bg-purple-500 text-white">
            COUNTRY
          </TableColumn>
          <TableColumn className="bg-purple-500 text-white">COUNT</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="2">
            <TableCell>POEZD V PUSAN</TableCell>
            <TableCell>CHINA</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>PULP</TableCell>
            <TableCell>USE</TableCell>
            <TableCell>100m</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>KROV NA ASVALTE</TableCell>
            <TableCell>RUSSIA</TableCell>
            <TableCell>0,5 m</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
