import type { Metadata } from "next";
import { PageComponent } from "./pageComponent";

export const metadata: Metadata = {
  title: "Board of Directors & Leadership | Sarker Trims",
  description:
    "Meet the leadership behind Sarker Trims: Founder Golam Kibria Chowdhury and Managing Director Tareq Chowdhury, bringing hands-on manufacturing leadership to narrow fabrics and packaging in Bangladesh.",
  alternates: {
    canonical: "/board-of-directors",
  },
  openGraph: {
    title: "Board of Directors | Sarker Trims Bangladesh",
    description:
      "Hands-on factory leadership and engineering excellence in trims and export packaging manufacturing.",
    url: "https://www.sarkertrims.com/board-of-directors",
  },
};

export default function Page() {
  return <PageComponent />;
}