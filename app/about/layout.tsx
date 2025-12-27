import { MarketingLayout } from "@/components/layout/MarketingLayout";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MarketingLayout>{children}</MarketingLayout>;
}
