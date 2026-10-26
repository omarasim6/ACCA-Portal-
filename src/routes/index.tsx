import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, ExternalLink } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sign in to MyACCA | Member & student portal" },
      {
        name: "description",
        content:
          "Sign in to MyACCA with your email address or ACCA ID to access your exams, documents and personal account details.",
      },
      { property: "og:title", content: "Sign in to MyACCA" },
      {
        property: "og:description",
        content: "Access your secure personal MyACCA account: exams, documents and payments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Please enter your username and password.");
      return;
    }
    setError("");
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="min-h-screen bg-secondary">
      <div className="bg-secondary px-4 py-4">
        <span className="inline-flex h-14 w-16 items-center justify-center bg-primary text-xl font-extrabold tracking-tight text-primary-foreground">
          ACCA
        </span>
      </div>

      <main className="mx-auto max-w-xl px-4 pb-16">
        <h1 className="py-8 text-center text-4xl font-normal text-foreground">Sign in to MyACCA</h1>

        <form onSubmit={submit} className="border border-border bg-background p-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            Enter the email address you registered at the time of setting up your account OR enter
            your ACCA ID and password below to access your secure personal MyACCA account.
          </p>

          <label htmlFor="username" className="mt-8 block text-base font-semibold text-foreground">
            Username<span className="text-primary">*</span>
          </label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            className="mt-3 h-14 w-full border border-border bg-background px-3 text-base text-foreground outline-none focus:border-primary"
          />

          <a
            href="#forgotten-username"
            className="mt-4 inline-block border-b border-dotted border-muted-foreground pb-0.5 text-base text-muted-foreground"
          >
            Forgotten your username?
          </a>

          <label
            htmlFor="password"
            className="mt-6 block text-base font-semibold text-foreground"
          >
            Password<span className="text-primary">*</span>
          </label>
          <div className="relative mt-3">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="h-14 w-full border border-border bg-background px-3 pr-14 text-base text-foreground outline-none focus:border-primary"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center text-foreground"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <a
            href="#forgotten-password"
            className="mt-5 inline-block border-b border-dotted border-muted-foreground pb-0.5 text-base text-muted-foreground"
          >
            Forgotten your password?
          </a>

          <a
            href="#help"
            className="mt-4 flex items-center gap-2 border-b border-dotted border-muted-foreground pb-0.5 text-base text-muted-foreground"
          >
            Having problems signing in? <ExternalLink className="h-4 w-4 shrink-0" />
          </a>

          {error && <p className="mt-5 text-base font-medium text-primary">{error}</p>}

          <button
            type="submit"
            className="mt-6 w-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}
