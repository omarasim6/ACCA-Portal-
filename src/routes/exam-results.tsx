import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PortalHeader } from "@/components/PortalHeader";

export const Route = createFileRoute("/exam-results")({
  head: () => ({
    meta: [
      { title: "Exam results | MyACCA qualification progress" },
      {
        name: "description",
        content:
          "Your ACCA exam results and exemptions: FA1, FA2, MA1 and BT results with session, status and qualification details.",
      },
      { property: "og:title", content: "Exam results | MyACCA" },
      {
        property: "og:description",
        content: "View your ACCA exam results, download transcripts and check eligible exemptions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExamResults,
});

type ExamResult = {
  id: string;
  name: string;
  session: string;
  status: string;
  mark: string;
  qualification: string;
  expiry: string;
};

const results: ExamResult[] = [
  {
    id: "40717733",
    name: "FA1 Recording Financial Transactions",
    session: "DEC2025",
    status: "CBE Pass",
    mark: "85%",
    qualification: "Foundations in Accountancy",
    expiry: "",
  },
  {
    id: "40717734",
    name: "FA2 Maintaining Financial Records",
    session: "APR2026",
    status: "CBE Pass",
    mark: "88%",
    qualification: "Foundations in Accountancy",
    expiry: "",
  },
  {
    id: "40717735",
    name: "BT Business and Technology",
    session: "JUN2026",
    status: "CBE Pass",
    mark: "88%",
    qualification: "Foundations in Accountancy",
    expiry: "",
  },
  {
    id: "40717736",
    name: "MA1 Management Information",
    session: "JUN2026",
    status: "CBE Pass",
    mark: "90%",
    qualification: "Foundations in Accountancy",
    expiry: "",
  },
  {
    id: "40717737",
    name: "MA2 Managing Costs and Finance",
    session: "SEP2026",
    status: "CBE Pass",
    mark: "80%",
    qualification: "Foundations in Accountancy",
    expiry: "",
  },
];

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-3 border-b border-border px-4 py-4 last:border-0">
      <p className="min-w-0 text-base font-bold text-foreground">{label}</p>
      <p className="min-w-0 break-words text-base text-foreground">{value}</p>
    </div>
  );
}

function ExamResults() {
  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />

      <main className="mx-auto max-w-3xl px-4 pb-20">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 pt-6 text-base">
          <Link to="/dashboard" className="font-bold text-primary">
            MyACCA
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/dashboard" className="font-bold text-primary">
            Qualification progress
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="font-bold text-foreground">Exam results</span>
        </nav>

        <h1 className="mt-5 text-4xl font-extrabold">Exam results</h1>
        <p className="mt-4 text-lg text-muted-foreground">Your exam results, and exemptions.</p>

        <div className="mt-5 space-y-3">
          <button
            type="button"
            className="block w-full max-w-md bg-primary px-5 py-4 text-left text-lg font-bold text-primary-foreground"
          >
            Download transcript- All results
          </button>
          <button
            type="button"
            className="block w-full max-w-md bg-primary px-5 py-4 text-left text-lg font-bold text-primary-foreground"
          >
            Download transcript- Positive results only
          </button>
        </div>

        <div className="mt-8 space-y-8">
          {results.map((r) => (
            <section key={r.id} className="border border-border bg-card">
              <div className="h-2 bg-border" />
              <Row label="Exam ID" value={r.id} />
              <Row label="Exam name" value={r.name} />
              <Row label="Exam session" value={r.session} />
              <Row label="Status" value={r.status} />
              <Row label="Mark" value={r.mark} />
              <Row label="Qualification" value={r.qualification} />
              <Row label="Exam Expiry" value={r.expiry} />
            </section>
          ))}
        </div>

        <Link
          to="/exam-results"
          className="mt-10 flex min-h-[150px] flex-col justify-between border border-border p-5"
        >
          <div>
            <h2 className="text-2xl font-extrabold">View exemptions</h2>
            <p className="mt-3 text-base">View and accept any eligible exemptions</p>
          </div>
          <ArrowRight className="mt-6 h-8 w-8 self-end" strokeWidth={1.5} />
        </Link>
      </main>
    </div>
  );
}
