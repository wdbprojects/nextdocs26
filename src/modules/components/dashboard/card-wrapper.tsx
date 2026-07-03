import { fetchCardData } from "@/lib/data";
import SummaryInfo from "./summary-info";

const CardWrapper = async () => {
  const cardData = await fetchCardData();

  return <SummaryInfo cardData={cardData} />;
};

export default CardWrapper;
