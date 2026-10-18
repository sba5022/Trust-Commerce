
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  UserRound,
  Mail,
  LockKeyhole,
  Leaf,
  ShieldCheck,
} from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (!form.terms) {
      setMessage("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    setMessage(
      "Your details are valid. Connect your authentication API to create your account."
    );
  };

  return (
    <main className="min-h-screen bg-[#faf9f7] px-3 py-5 sm:px-6 sm:py-8 lg:px-[3.4%] lg:py-[4.5%]">
      <div className="mx-auto grid min-h-[760px] max-w-[1600px] overflow-hidden rounded-2xl border border-[#e6e6e2] bg-white shadow-sm lg:min-h-[calc(100vh-9vw)] lg:grid-cols-[41.5%_58.5%]">

        {/* LEFT IMAGE PANEL */}
        <section className="relative flex min-h-[430px] flex-col overflow-hidden bg-[#28392d] p-7 text-white sm:p-10 lg:min-h-0 lg:p-[9%]">
          <img
            src="/images/botanical-signin.jpg"
            alt="Botanical skincare products"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-[#00291c]/95" />

          <div className="relative z-10 flex items-center justify-between gap-3">
            <span className="badge h-auto rounded-full border border-white/30 bg-white/15 px-3 py-2 text-[9px] font-semibold tracking-[1px] text-white">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-[#efd0a8]" />
              BESPOKE APOTHECARY
            </span>

            <span className="text-[11px] tracking-wide text-white/85">
              Est. 2021
            </span>
          </div>

          <div className="relative z-10 mt-auto pt-16">
            <div className="mb-7 h-[2px] w-12 bg-[#e9c59a]" />

            <h2 className="max-w-[430px] font-serif text-[30px] italic leading-[1.3] sm:text-[35px]">
              “Your daily ritual, thoughtfully crafted. Your natural radiance,
              beautifully preserved.”
            </h2>

            <p className="mt-6 max-w-[410px] text-[12px] leading-[1.8] text-white/75 sm:text-[13px]">
              Join a community that believes in conscious beauty, botanical
              ingredients, and rituals designed to nourish your skin.
            </p>

            <div className="mt-7 border-t border-white/20 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["A", "U", "R"].map((letter, i) => (
                    <span
                      key={letter}
                      className={`flex h-7 w-7 items-center justify-center rounded-full border border-white/40 text-[10px] ${
                        i === 1 ? "bg-[#a99b7c]" : "bg-[#899d8a]"
                      }`}
                    >
                      {letter}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] text-white/85">
                  Trusted by 24,000+ conscious patrons
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-14 flex flex-wrap justify-between gap-3 text-[10px] text-white/60">
            <span>Botanical skincare</span>
            <span>Consciously crafted</span>
          </div>
        </section>

        {/* RIGHT SIGNUP PANEL */}
        <section className="flex min-w-0 flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-[8%] lg:py-10 xl:px-[8.1%]">

          {/* TOP NAVIGATION */}
          <div className="flex items-center justify-between gap-3 border-b border-[#ecece9] pb-6">
            <span className="rounded-full bg-[#f0f2ef] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.8px] text-[#063a2a]">
              Create Account
            </span>

            <Link
              href="/login"
              className="text-[10px] font-semibold tracking-wide text-[#8c5118] transition hover:text-[#063a2a] sm:text-[11px]"
            >
              Already a member? Sign In
            </Link>
          </div>

          
          <div className="mt-7">
            <span className="badge h-auto rounded-full border-0 bg-[#f1f3f1] px-3 py-1 text-[9px] font-bold tracking-[1px] text-[#063a2a]">
              WELCOME TO AURA
            </span>

            <h1 className="mt-4 font-serif text-[34px] leading-tight tracking-[-1.2px] text-[#063a2a] sm:text-[40px]">
              Create Your Sanctuary
            </h1>

            <p className="mt-2 max-w-[460px] text-[13px] leading-[1.8] text-[#484e4a] sm:text-[14px]">
              Create your account to explore personalized skincare rituals,
              saved orders, and botanical consultations.
            </p>
          </div>

          
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() =>
                setMessage("Google sign-up requires Google OAuth integration.")
              }
              className="btn h-[44px] min-h-[44px] rounded-full border border-[#dededb] bg-[#fbfaf9] text-[12px] font-semibold normal-case text-[#292b29] shadow-none hover:bg-[#f1f0ed]"
            >
              <span className="font-bold text-[#4285f4]">G</span>
              Continue with Google
            </button>

            <button
              type="button"
              onClick={() =>
                setMessage("Apple sign-up requires Apple authentication integration.")
              }
              className="btn h-[44px] min-h-[44px] rounded-full border border-[#dededb] bg-[#fbfaf9] text-[12px] font-semibold normal-case text-[#292b29] shadow-none hover:bg-[#f1f0ed]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M16.37 12.2c.02 2.1 1.84 2.8 1.86 2.81-.02.05-.29 1.02-.95 2.02-.57.85-1.17 1.7-2.1 1.72-.92.02-1.22-.55-2.28-.55-1.05 0-1.39.53-2.25.57-.9.03-1.59-.92-2.17-1.77-1.18-1.7-2.08-4.8-.87-6.9.6-1.05 1.66-1.72 2.8-1.74.87-.02 1.69.6 2.22.6.52 0 1.5-.75 2.53-.64.43.02 1.65.17 2.43 1.3-.06.04-1.45.85-1.22 2.58ZM14.7 6.9c.47-.57.79-1.36.7-2.15-.68.03-1.5.45-1.98 1.02-.44.5-.82 1.3-.72 2.06.75.06 1.53-.38 2-.93Z" />
              </svg>
              Continue with Apple
            </button>
          </div>

          {/* DIVIDER */}
          <div className="my-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#e9e9e6]" />
            <span className="text-[9px] font-semibold tracking-[1px] text-[#727873]">
              OR WITH EMAIL
            </span>
            <div className="h-px flex-1 bg-[#e9e9e6]" />
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-[12px] font-medium text-[#252925]"
              >
                Full Name
              </label>

              <label className="input flex h-[44px] w-full items-center gap-3 rounded-[9px] border border-[#ced2cd] bg-white px-3.5 shadow-none focus-within:border-[#214d3b]">
                <UserRound size={16} className="shrink-0 text-[#737b75]" />

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Elena Vance"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="min-w-0 flex-1 text-[12px] text-[#303630] outline-none placeholder:text-[#bdc4be]"
                />
              </label>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-[12px] font-medium text-[#252925]"
              >
                Email Address
              </label>

              <label className="input flex h-[44px] w-full items-center gap-3 rounded-[9px] border border-[#ced2cd] bg-white px-3.5 shadow-none focus-within:border-[#214d3b]">
                <Mail size={16} className="shrink-0 text-[#737b75]" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="e.g. elena@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="min-w-0 flex-1 text-[12px] text-[#303630] outline-none placeholder:text-[#bdc4be]"
                />
              </label>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-[12px] font-medium text-[#252925]"
              >
                Password
              </label>

              <label className="input flex h-[44px] w-full items-center gap-3 rounded-[9px] border border-[#ced2cd] bg-white px-3.5 shadow-none focus-within:border-[#214d3b]">
                <LockKeyhole size={16} className="shrink-0 text-[#737b75]" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  minLength={8}
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="min-w-0 flex-1 text-[12px] text-[#303630] outline-none placeholder:text-[#bdc4be]"
                />

                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="shrink-0 text-[#737b75] hover:text-[#063a2a]"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </label>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1.5 block text-[12px] font-medium text-[#252925]"
              >
                Confirm Password
              </label>

              <label className="input flex h-[44px] w-full items-center gap-3 rounded-[9px] border border-[#ced2cd] bg-white px-3.5 shadow-none focus-within:border-[#214d3b]">
                <ShieldCheck size={16} className="shrink-0 text-[#737b75]" />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  className="min-w-0 flex-1 text-[12px] text-[#303630] outline-none placeholder:text-[#bdc4be]"
                />

                <button
                  type="button"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="shrink-0 text-[#737b75] hover:text-[#063a2a]"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </label>
            </div>

            {/* TERMS */}
            <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-[11px] leading-[1.7] text-[#484e4a]">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                className="checkbox checkbox-xs mt-0.5 shrink-0 rounded-[4px] border-[#9ba59e] checked:border-[#214d3b] checked:bg-[#214d3b] checked:text-white"
              />

              <span>
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-semibold text-[#063a2a] underline underline-offset-2"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-[#063a2a] underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            {message && (
              <p
                role="status"
                className="rounded-lg bg-[#f0f3ef] px-3 py-2 text-[11px] leading-5 text-[#214d3b]"
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="btn mt-2 h-[47px] min-h-[47px] w-full rounded-full border-0 bg-[#1b4535] text-[12px] font-semibold normal-case text-white shadow-md hover:bg-[#103526]"
            >
              Create Account
              <ArrowRight size={16} />
            </button>
          </form>

          {/* SIGN IN */}
          <div className="mt-5 border-t border-[#ecece9] pt-4 text-center">
            <p className="text-[11px] text-[#484e4a]">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-semibold text-[#063a2a] underline underline-offset-2 hover:text-[#8c5118]"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* SECURITY FOOTER */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9px] tracking-[0.3px] text-[#69716b]">
            <span className="flex items-center gap-1.5">
              <LockKeyhole size={12} className="text-[#214d3b]" />
              Secure account creation
            </span>

            <span className="flex items-center gap-1.5">
              <Leaf size={12} className="text-[#214d3b]" />
              Consciously crafted apothecary
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
