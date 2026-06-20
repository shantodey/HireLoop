import { Card } from "@heroui/react";

const StatCard = ({ title, value,icon: Icon,}) => {
    return (
         <Card className="border border-default-200 bg-content1">
      <Card.Header className="flex flex-col items-start gap-4">
        <div className="rounded-lg bg-default-100 p-2">
          <Icon className="size-5 text-default-500" />
        </div>

        <div>
          <Card.Description>{title}</Card.Description>
          <Card.Title className="mt-1 text-2xl font-semibold">
            {value}
          </Card.Title>
        </div>
      </Card.Header>
    </Card>
    );
};

export default StatCard;