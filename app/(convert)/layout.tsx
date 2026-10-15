// The convert app's frame: content plus a bottom tab bar. The lesson player hides the bar (full screen).
import { BottomNav } from "@/components/BottomNav";

export default function ConvertLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="flex-1">{children}</div>
      <BottomNav />
    </div>
  );
}
