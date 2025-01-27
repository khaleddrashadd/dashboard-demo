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
      text: "text-primary-500",
    },
    "secondary-400": {
      bg: "bg-secondary-400/10",
      border: "border-secondary-400",
      text: "text-secondary-400",
    },
    "danger-200": {
      bg: "bg-danger-200/10",
      border: "border-danger-200",
      text: "text-danger-200",
    },
    "extended-700": {
      bg: "bg-extended-700/10",
      border: "border-extended-700",
      text: "text-extended-700",
    },
  };

  // Get the classes for the current variant
  const { bg, border, text } = variantClasses[card.variant] || {
    bg: "bg-gray-500/10",
    border: "border-gray-500",
    text: "text-gray-500",
  };

  return (
    <Card className={`${bg} ${border} py-5 px-4 flex flex-col gap-2`}>
      <CardHeader className="p-0">
        <CardTitle
          className={`p-0 font-bold text-primary-500 text-lg ${text} `}
        >
          {card.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 font-semibold text-lg text-ivory-950">
        <p>{card.content}</p>
      </CardContent>
      <CardFooter className="p-0 text-lg text-ivory-750">
        <p>{card.icon}</p>
      </CardFooter>
    </Card>
  );
};

export default InstallmentCard;
