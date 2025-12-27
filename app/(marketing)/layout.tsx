import { MarketingLayout } from "@/components/layout/MarketingLayout";

export default function MarketingLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MarketingLayout>{children}</MarketingLayout>;
}
