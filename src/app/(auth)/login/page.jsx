
"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  Leaf,
  CircleHelp,
  Smartphone,
  WandSparkles,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  const [portal, setPortal] = useState("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      "Sign-in form submitted. Connect your authentication API to sign in."
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f8] px-3 py-5 sm:px-6 sm:py-8 lg:px-[3.4%] lg:py-[4.5%]">
      <div className="mx-auto grid min-h-[760px] max-w-[1600px] overflow-hidden rounded-[16px] border border-[#e7e7e4] bg-white shadow-[0_3px_15px_rgba(20,40,30,0.04)] lg:min-h-[calc(100vh-9vw)] lg:grid-cols-[41.5%_58.5%]">

        {/* LEFT: Botanical image panel */}
        <section className="relative flex min-h-[520px] flex-col overflow-hidden bg-[#514b37] p-7 text-white sm:p-10 lg:min-h-0 lg:p-[9%]">
          <img
            src="/images/botanical-signin.jpg"
            alt="Botanical skincare serum bottles"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-[#00271b]/95" />

          {/* Image top row */}
          <div className="relative z-10 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-2 text-[9px] font-semibold uppercase tracking-[1.1px] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#f4d5b0]" />
              Bespoke Apothecary
            </span>

            <span className="text-[11px] tracking-[0.7px] text-white/85">
              Est. 2021
            </span>
          </div>

          {/* Quote and trust information */}
          <div className="relative z-10 mt-auto pt-20">
            <div className="mb-7 h-[2px] w-[46px] bg-[#e8c89e]" />

            <blockquote className="max-w-[440px] font-serif text-[29px] italic leading-[1.28] tracking-[-0.5px] sm:text-[34px] lg:text-[29px] xl:text-[32px]">
              “Return to your daily ritual. Natural radiance, thoughtfully
              preserved.”
            </blockquote>

            <p className="mt-6 max-w-[410px] text-[12px] leading-[1.75] text-white/75 sm:text-[13px]">
              Handcrafted biodynamic serums, therapeutic cold-pressed botanical
              infusions, and cold-distilled adaptogens designed to harmonize
              your skin microbiome.
            </p>

            <div className="mt-6 border-t border-white/20 pt-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex -space-x-2">
                  {["A", "U", "R"].map((letter, index) => (
                    <span
                      key={letter}
                      className={`flex h-7 w-7 items-center justify-center rounded-full border border-white/40 text-[10px] text-white ${
                        index === 1
                          ? "bg-[#b7a789]/80"
                          : "bg-[#a4b4a2]/80"
                      }`}
                    >
                      {letter}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] tracking-[0.2px] text-white/85">
                  Trusted by 24,000+ conscious patrons
                </span>
              </div>
            </div>
          </div>

          {/* Bottom image details */}
          <div className="relative z-10 mt-16 flex flex-wrap justify-between gap-3 text-[10px] text-white/65">
            <span>Batch No. 892-Nordic Flora</span>
            <span>100% Recyclable Miron Violet Glass</span>
          </div>
        </section>

        {/* RIGHT: Sign-in form */}
        <section className="flex min-w-0 flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-[8%] lg:py-[5%] xl:px-[8.1%]">
          {/* Tabs and assistance */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#ecece9] pb-6">
            <div className="inline-flex rounded-full border border-[#e5e4e2] bg-[#f0efed] p-1">
              <button
                type="button"
                onClick={() => setPortal("customer")}
                className={`rounded-full px-4 py-[9px] text-[9px] font-bold uppercase tracking-[0.5px] transition ${
                  portal === "customer"
                    ? "bg-white text-[#073b2b] shadow-sm"
                    : "text-[#4d514e] hover:text-[#073b2b]"
                }`}
              >
                Customer Login
              </button>

              <button
                type="button"
                onClick={() => setPortal("staff")}
                className={`rounded-full px-4 py-[9px] text-[9px] font-bold uppercase tracking-[0.5px] transition ${
                  portal === "staff"
                    ? "bg-white text-[#073b2b] shadow-sm"
                    : "text-[#4d514e] hover:text-[#073b2b]"
                }`}
              >
                Staff / Admin Portal
              </button>
            </div>

            <a
              href="mailto:hello@aurawellness.example"
              className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] text-[#8c5118] hover:text-[#063a2a]"
            >
              <CircleHelp size={12} />
              Need Assistance?
            </a>
          </div>

          {/* Heading */}
          <div className="mt-9">
            <span className="inline-flex rounded-full bg-[#f1f3f1] px-3 py-1 text-[9px] font-bold uppercase tracking-[1px] text-[#073b2b]">
              {portal === "customer"
                ? "Welcome back to Aura"
                : "Authorized personnel"}
            </span>

            <h1 className="mt-4 font-serif text-[34px] font-medium leading-[1.15] tracking-[-1.2px] text-[#063a2a] sm:text-[39px] xl:text-[40px]">
              {portal === "customer"
                ? "Sign In to Your Sanctuary"
                : "Staff & Admin Sign In"}
            </h1>

            <p className="mt-2 max-w-[470px] text-[13px] leading-[1.8] text-[#484e4a] sm:text-[14px]">
              {portal === "customer"
                ? "Access your curated formulation rituals, saved orders, and complimentary bespoke botanical consultations."
                : "Access your authorized AURA workspace and administrative tools securely."}
            </p>
          </div>

          {/* Social login */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() =>
                setMessage("Connect Google OAuth to enable Google sign-in.")
              }
              className="btn h-[46px] min-h-[46px] rounded-full border border-[#dededb] bg-[#fbfaf9] text-[12px] font-semibold normal-case text-[#292b29] shadow-none hover:bg-[#f2f0ed]"
            >
              <span className="font-bold text-[#4285f4]">G</span>
              Continue with Google
            </button>

            <button
              type="button"
              onClick={() =>
                setMessage("Connect Apple authentication to enable Apple sign-in.")
              }
              className="btn h-[46px] min-h-[46px] rounded-full border border-[#dededb] bg-[#fbfaf9] text-[12px] font-semibold normal-case text-[#292b29] shadow-none hover:bg-[#f2f0ed]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[15px] w-[15px] fill-current"
                aria-hidden="true"
              >
                <path d="M16.37 12.2c.02 2.1 1.84 2.8 1.86 2.81-.02.05-.29 1.02-.95 2.02-.57.85-1.17 1.7-2.1 1.72-.92.02-1.22-.55-2.28-.55-1.05 0-1.39.53-2.25.57-.9.03-1.59-.92-2.17-1.77-1.18-1.7-2.08-4.8-.87-6.9.6-1.05 1.66-1.72 2.8-1.74.87-.02 1.69.6 2.22.6.52 0 1.5-.75 2.53-.64.43.02 1.65.17 2.43 1.3-.06.04-1.45.85-1.22 2.58ZM14.7 6.9c.47-.57.79-1.36.7-2.15-.68.03-1.5.45-1.98 1.02-.44.5-.82 1.3-.72 2.06.75.06 1.53-.38 2-.93Z" />
              </svg>
              Continue with Apple
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#e9e9e6]" />
            <span className="text-[9px] font-semibold uppercase tracking-[1px] text-[#727873]">
              Or with email
            </span>
            <div className="h-px flex-1 bg-[#e9e9e6]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <label
                  htmlFor="email"
                  className="text-[12px] font-medium text-[#252925]"
                >
                  Email Address
                </label>

                <button
                  type="button"
                  onClick={() => {
                    setEmail("elena.vance@example.com");
                    setPassword("Ritual2026!");
                    setMessage("");
                  }}
                  className="inline-flex items-center gap-1 text-[9px] font-semibold tracking-[0.3px] text-[#8c5118] hover:underline"
                >
                  <WandSparkles size={11} />
                  Quick fill: Returning Patron
                </button>
              </div>

              <label className="input flex h-[49px] w-full items-center gap-3 rounded-[10px] border border-[#ced2cd] bg-white px-4 shadow-none focus-within:border-[#214d3b]">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="e.g. elena.vance@sanctuary.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="min-w-0 flex-1 text-[13px] text-[#303630] outline-none placeholder:text-[#bdc4be]"
                />
                <Mail size={17} className="shrink-0 text-[#737b75]" />
              </label>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-[12px] font-medium text-[#252925]"
                >
                  Password
                </label>

                <a
                  href="/forgot-password"
                  className="text-[9px] font-semibold tracking-[0.5px] text-[#8c5118] hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <label className="input flex h-[49px] w-full items-center gap-3 rounded-[10px] border border-[#ced2cd] bg-white px-4 shadow-none focus-within:border-[#214d3b]">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={
                    portal === "customer"
                      ? "current-password"
                      : "current-password"
                  }
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  className="min-w-0 flex-1 text-[13px] text-[#303630] outline-none placeholder:text-[#bdc4be]"
                />

                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="shrink-0 text-[#737b75] hover:text-[#063a2a]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </label>
            </div>

            {/* Remember device and passcode */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <label className="flex cursor-pointer items-center gap-2.5 text-[11px] text-[#484e4a]">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                  className="checkbox checkbox-xs rounded-[4px] border-[#9ba59e] checked:border-[#214d3b] checked:bg-[#214d3b] checked:text-white"
                />
                Remember this device for 30 days
              </label>

              <button
                type="button"
                onClick={() =>
                  setMessage("One-time passcode sign-in needs to be connected to your authentication service.")
                }
                className="inline-flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.5px] text-[#484e4a] hover:text-[#063a2a]"
              >
                <Smartphone size={12} />
                One-Time Passcode
              </button>
            </div>

            {/* Feedback */}
            {message && (
              <p
                role="status"
                className="rounded-lg bg-[#f0f3ef] px-3 py-2 text-[12px] leading-5 text-[#214d3b]"
              >
                {message}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="btn mt-2 h-[48px] min-h-[48px] w-full rounded-full border-0 bg-[#1b4535] text-[13px] font-semibold normal-case text-white shadow-[0_3px_5px_rgba(0,0,0,0.15)] hover:bg-[#103526]"
            >
              Sign In to Account
              <ArrowRight size={17} />
            </button>
          </form>

          {/* Create account */}
          <div className="mt-7 border-t border-[#ecece9] pt-7">
            <div className="flex flex-col items-start justify-between gap-4 rounded-[12px] border border-[#e5e3e0] bg-[#f5f3f1] p-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-[12px] font-medium text-[#252925]">
                  New to AURA Living & Wellness?
                </h3>
                <p className="mt-1 max-w-[370px] text-[12px] leading-[1.65] text-[#484e4a]">
                  Receive 15% off your initial ritual formulation with account
                  creation.
                </p>
              </div>

              <Link
                href="/register"
                className="btn h-[34px] min-h-[34px] shrink-0 rounded-full border border-[#214d3b] bg-transparent px-4 text-[10px] font-semibold tracking-[0.4px] normal-case text-[#063a2a] shadow-none hover:bg-[#e8eee9]"
              >
                Create Account
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Security details */}
          <div className="mt-5 flex flex-col justify-between gap-3 text-[9px] font-medium tracking-[0.5px] text-[#69716b] sm:flex-row sm:items-center">
            <span className="flex items-center gap-2">
              <LockKeyhole size={14} className="shrink-0 text-[#214d3b]" />
              256-bit encrypted checkout & privacy guaranteed
            </span>

            <span className="flex items-center gap-2">
              <Leaf size={14} className="shrink-0 text-[#214d3b]" />
              Carbon-neutral verified apothecary
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
