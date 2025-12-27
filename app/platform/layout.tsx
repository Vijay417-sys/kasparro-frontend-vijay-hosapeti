import { MarketingLayout } from "@/components/layout/MarketingLayout";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MarketingLayout>{children}</MarketingLayout>;
}
