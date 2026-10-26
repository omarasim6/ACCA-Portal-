import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PortalHeader } from "@/components/PortalHeader";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "MyACCA home | Your exams, documents and account" },
      {
        name: "description",
        content:
          "Your MyACCA home: notifications, exam progress, personal documents, statements and payment receipts all in one place.",
      },
      { property: "og:title", content: "MyACCA home" },
      {
        property: "og:description",
        content: "Notifications, exam progress and quick links to your MyACCA account pages.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

const findingYourWay = [
  { title: "My details", description: "View and update your personal details.", to: "/my-details" },
  {
    title: "Personal documents",
    description: "Access your certificates & other documents.",
    to: "/dashboard",
  },
  {
    title: "Statements & payment receipts",
    description: "View & download your receipts and account statement.",
    to: "/dashboard",
  },
  { title: "Help", description: "Find answers and raise a case with us.", to: "/dashboard" },
];

function Dashboard() {
  const [notificationRead, setNotificationRead] = useState(false);
  const completed = 5;
  const total = 9;
  const circumference = 2 * Math.PI * 70;

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />

      <main className="mx-auto max-w-3xl px-4 pb-20">
        <h1 className="pt-8 text-5xl font-extrabold leading-tight">
          Hello <span className="text-primary">Muhammad</span>
        </h1>
        <p className="mt-4 text-lg text-foreground">Welcome to your new and improved MyACCA.</p>

        <div className="mt-8 border border-border bg-info-panel p-5">
          <ul className="list-disc space-y-4 pl-5 text-base leading-relaxed">
            <li>
              Invoices and receipts for your payment can be found on the{" "}
              <span className="font-bold underline decoration-dotted">
                Statement and payment receipts
              </span>{" "}
              page, receipts will be available after your payment has updated in your portal and the
              invoice is available.
            </li>
            <li>
              Students and Affiliates: Get ahead of the 2027 ACCA Qualification changes.{" "}
              <span className="font-bold underline decoration-dotted">
                Explore your transition guidance.
              </span>
            </li>
          </ul>
        </div>

        <h2 className="mt-12 text-3xl font-extrabold">Notifications</h2>
        <p className="mt-3 text-base text-foreground">
          {notificationRead ? "You have no items for your attention." : "There is 1 item for your attention."}
        </p>

        {!notificationRead && (
          <div className="mt-5 bg-primary p-5 text-primary-foreground">
            <h3 className="text-xl font-extrabold">Employment details</h3>
            <p className="mt-3 text-base leading-relaxed">
              Help us to provide you with the best service by ensuring your employer details are
              complete and up to date.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/my-details"
                className="bg-background px-5 py-3 text-base font-bold text-foreground"
              >
                Update now
              </Link>
              <button
                type="button"
                onClick={() => setNotificationRead(true)}
                className="bg-background px-5 py-3 text-base font-bold text-foreground"
              >
                Mark as read
              </button>
            </div>
          </div>
        )}

        <p className="mt-5 text-base">
          View your{" "}
          <span className="font-bold underline decoration-dotted">notification history</span>.
        </p>

        <h2 className="mt-12 text-3xl font-extrabold">Finding your way around</h2>
        <p className="mt-3 text-base">Here are the new features and where to find them.</p>

        <div className="mt-6 space-y-4">
          {findingYourWay.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="flex min-h-[150px] flex-col justify-between border border-border p-5 transition-colors hover:bg-secondary"
            >
              <div>
                <h3 className="text-xl font-extrabold">{card.title}</h3>
                <p className="mt-3 text-base text-foreground">{card.description}</p>
              </div>
              <ArrowRight className="mt-6 h-8 w-8 self-end" strokeWidth={1.5} />
            </Link>
          ))}
        </div>

        <h2 className="mt-12 text-3xl font-extrabold">Your exams progress</h2>
        <div className="mt-8 flex flex-col items-center">
          <svg viewBox="0 0 160 160" className="h-44 w-44" aria-hidden="true">
            <circle cx="80" cy="80" r="70" fill="none" stroke="var(--border)" strokeWidth="8" />
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (completed / total) * circumference - 1}
              transform="rotate(-90 80 80)"
            />
          </svg>
          <p className="mt-4 text-2xl font-extrabold">
            {completed}/{total}
          </p>
          <p className="text-2xl font-extrabold">exams completed</p>
        </div>

        <button
          type="button"
          className="mt-6 bg-primary px-6 py-4 text-base font-bold text-primary-foreground"
        >
          Book an exam
        </button>
        <div className="mt-5 space-y-3">
          <Link
            to="/exam-results"
            className="block text-base font-medium underline decoration-dotted"
          >
            Exam results
          </Link>
          <p className="text-base font-medium underline decoration-dotted">View exemptions</p>
        </div>

        <h2 className="mt-12 text-3xl font-extrabold">Your experience progress</h2>
        <p className="mt-6 text-center text-2xl font-extrabold">No experience recorded yet</p>
        <p className="mt-4 text-base leading-relaxed">
          Use the MyExperience tool to record your practical experience requirement (PER) and track
          your progress towards membership.
        </p>
      </main>
    </div>
  );
}
