"use client";

import { useMemo, useState } from "react";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { Icon } from "./Icon";

/**
 * The form composes a structured enquiry and hands it to WhatsApp or the
 * user's mail client. Nothing is stored and no backend is required, so it
 * works the moment the site is deployed.
 *
 * To capture enquiries server side instead, add a route handler at
 * src/app/api/enquiry/route.ts and POST `message` to it from handleSubmit.
 */
export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    service: "",
    urgency: "Needed today",
    message: "",
  });

  const composed = useMemo(() => {
    const lines = [
      "Enquiry from the website",
      "",
      `Name: ${form.name || "not given"}`,
      `Phone: ${form.phone || "not given"}`,
      `City: ${form.city || "not given"}`,
      `Service: ${form.service || "not sure yet"}`,
      `When: ${form.urgency}`,
      "",
      "Details:",
      form.message || "No further details given.",
    ];
    return lines.join("\n");
  }, [form]);

  const whatsappUrl = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(composed)}`;
  const mailUrl = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    `Website enquiry: ${form.service || "general"}${form.city ? ` (${form.city})` : ""}`,
  )}&body=${encodeURIComponent(composed)}`;

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <form
      className="card p-7 lg:p-9"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }}
    >
      <div className="flex items-start gap-3 rounded-lg border border-marigold-200 bg-marigold-50 p-4">
        <Icon
          name="phone"
          className="mt-0.5 h-4 w-4 shrink-0 text-marigold-700"
          strokeWidth={1.8}
        />
        <p className="text-[13.5px] leading-relaxed text-marigold-900">
          If this is happening now, please call{" "}
          <a href={`tel:+${site.contact.phoneRaw}`} className="font-semibold underline">
            {site.contact.phone}
          </a>{" "}
          instead. A form is slower than a phone, and we answer at every hour.
        </p>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={set("name")}
            placeholder="Full name"
            className={inputClass}
          />
        </Field>

        <Field label="Phone number" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            inputMode="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="10 digit mobile number"
            className={inputClass}
          />
        </Field>

        <Field label="City" htmlFor="city">
          <select
            id="city"
            name="city"
            value={form.city}
            onChange={set("city")}
            className={inputClass}
          >
            <option value="">Select a city</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Another city">Another city</option>
            <option value="Outside India">Outside India</option>
          </select>
        </Field>

        <Field label="What do you need?" htmlFor="service">
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={set("service")}
            className={inputClass}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.navTitle}>
                {s.navTitle}
              </option>
            ))}
            <option value="Not sure, please advise">Not sure, please advise</option>
          </select>
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 text-[13.5px] font-semibold text-ink-800">
          When is this needed?
        </legend>
        <div className="flex flex-wrap gap-2">
          {["Right now", "Needed today", "In the next few days", "Planning ahead"].map(
            (u) => (
              <label
                key={u}
                className={`cursor-pointer rounded-full border px-4 py-2 text-[13.5px] transition-colors ${
                  form.urgency === u
                    ? "border-marigold-400 bg-marigold-500 text-white"
                    : "border-ink-200 text-ink-700 hover:border-marigold-300 hover:bg-marigold-50"
                }`}
              >
                <input
                  type="radio"
                  name="urgency"
                  value={u}
                  checked={form.urgency === u}
                  onChange={set("urgency")}
                  className="sr-only"
                />
                {u}
              </label>
            ),
          )}
        </div>
      </fieldset>

      <div className="mt-6">
        <Field label="Anything else we should know" htmlFor="message" optional>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={set("message")}
            placeholder="The community whose rites you follow, whether relatives are travelling, the hospital or area you are in. Whatever helps us prepare."
            className={`${inputClass} resize-y`}
          />
        </Field>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn btn-primary btn-lg flex-1">
          <Icon name="phone" className="h-4 w-4" strokeWidth={1.8} />
          Send on WhatsApp
        </button>
        <a href={mailUrl} className="btn btn-outline btn-lg flex-1">
          Send by email
        </a>
      </div>

      <p className="mt-4 text-[12.5px] leading-relaxed text-ink-500">
        Your details open in WhatsApp or your mail app so you can check them
        before sending. Nothing is stored on this website.
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 transition-colors focus:border-marigold-400 focus:outline-none focus:ring-2 focus:ring-marigold-200";

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-baseline gap-2 text-[13.5px] font-semibold text-ink-800"
      >
        {label}
        {optional ? (
          <span className="text-[12px] font-normal text-ink-400">optional</span>
        ) : null}
      </label>
      {children}
    </div>
  );
}
