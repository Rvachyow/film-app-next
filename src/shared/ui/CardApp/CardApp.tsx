import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { ListItem } from "~/pages/HomePage/types";
import { sliceLongString } from "~/shared/lib/sliceLongString";

interface ICardApp extends ListItem {}

export const CardApp = ({ name, poster, logo, year, genres, id }: ICardApp) => {
  return (
    <Link href={`title/${id}`}>
      <Card style={{ backgroundColor: "#180828" }} className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h4 style={{ textAlign: "center" }} className="font-bold text-large">
            {sliceLongString(name)}
          </h4>
          <small style={{ color: "#AE7EDE" }} className="text-default-500">
            {year}, {genres[0].name}
          </small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={poster.url}
            width={270}
          />
        </CardBody>
      </Card>
    </Link>
  );
};
