// The path now lives on the Learn tab.
import { redirect } from "next/navigation";

export default function PathPage() {
  redirect("/today");
}
