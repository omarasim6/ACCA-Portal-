import { createFileRoute, Link } from "@tanstack/react-router";
import { PortalHeader } from "@/components/PortalHeader";

export const Route = createFileRoute("/my-details")({
  head: () => ({
    meta: [
      { title: "My details | MyACCA personal account" },
      {
        name: "description",
        content:
          "View your MyACCA personal information, ACCA ID, login details, qualification, role and registration status.",
      },
      { property: "og:title", content: "My details | MyACCA" },
      {
        property: "og:description",
        content: "Your personal information, login details and qualification status in MyACCA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MyDetails,
});

const yourInformation = [
  { label: "Full name", value: "Mr Muhammad Owais" },
  { label: "ACCA ID", value: "6611333" },
  { label: "Designation", value: "" },
  { label: "Date of birth", value: "02 March 2007" },
  { label: "Gender", value: "Male" },
  { label: "Country of nationality", value: "Pakistan" },
];

const loginDetails = [
  { label: "Username", value: "owais@example.com" },
  { label: "Password", value: "••••••••" },
];

const statusDetails = [
  { label: "Qualification", value: "Foundations in Accountancy" },
  { label: "Role", value: "Student" },
  { label: "Status", value: "Active" },
  { label: "Registration date", value: "30 July 2025" },
];

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-6 first:mt-0">
      <p className="text-base font-bold text-foreground">{label}</p>
      <p className="mt-2 min-h-6 text-base text-muted-foreground">{value}</p>
    </div>
  );
}

function MyDetails() {
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
            Personal account
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="font-bold text-foreground">My details</span>
        </nav>

        <h1 className="mt-5 text-4xl font-extrabold">My details</h1>

        <section className="mt-6 border border-border bg-card p-5">
          <h2 className="text-2xl font-extrabold">Your information</h2>
          <p className="mt-3 text-base text-muted-foreground">
            Change this information by{" "}
            <span className="font-bold text-foreground underline decoration-dotted">
              raising a case.
            </span>
          </p>
          <div className="mt-6">
            {yourInformation.map((f) => (
              <Field key={f.label} {...f} />
            ))}
          </div>
        </section>

        <section className="mt-8 border border-border bg-card p-5">
          <h2 className="text-2xl font-extrabold">Login details</h2>
          <div className="mt-6">
            {loginDetails.map((f) => (
              <Field key={f.label} {...f} />
            ))}
          </div>
        </section>

        <section className="mt-8 border border-border bg-card p-5">
          <h2 className="text-2xl font-extrabold">Your status</h2>
          <div className="mt-6">
            {statusDetails.map((f) => (
              <Field key={f.label} {...f} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
