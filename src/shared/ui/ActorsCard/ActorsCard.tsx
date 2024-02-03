import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
export const ActorsCard = () => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Steve_Buscemi_%281996%29.jpg/220px-Steve_Buscemi_%281996%29.jpg"
          width={150}
        />
      </CardBody>
    </Card>
  );
};
