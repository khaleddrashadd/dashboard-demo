import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const InstallmentCard = ({ card }) => {
  const variantClasses = {
    "primary-500": {
      bg: "bg-primary-500/10",
      border: "border-primary-500",
    },
    "secondary-400": {
      bg: "bg-secondary-400/10",
      border: "border-secondary-400",
    },
    "danger-200": {
      bg: "bg-danger-200/10",
      border: "border-danger-200",
    },
    "extended-700": {
      bg: "bg-extended-700/10",
      border: "border-extended-700",
    },
  };

  // Get the classes for the current variant
  const { bg, border } = variantClasses[card.variant] || {
    bg: "bg-gray-500/10",
    border: "border-gray-500",
  };

  return (
    <Card className={`${bg} ${border}`}>
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{card.content}</p>
      </CardContent>
      <CardFooter>
        <p>{card.icon}</p>
      </CardFooter>
    </Card>
  );
};

export default InstallmentCard;
