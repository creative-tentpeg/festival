"use client";

import { FormEvent, useState } from "react";

type NewsletterSignupFormProps = {
  formClassName: string;
  inputClassName: string;
  buttonClassName: string;
  buttonLabel?: string;
  inputPlaceholder?: string;
  successClassName?: string;
  errorClassName?: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

export function NewsletterSignupForm({
  formClassName,
  inputClassName,
  buttonClassName,
  buttonLabel = "Subscribe",
  inputPlaceholder = "Your email",
  successClassName = "mt-3 inline-block rounded-md bg-[#022154] px-3 py-2 text-sm text-white",
  errorClassName = "mt-3 inline-block rounded-md bg-yellow-300 px-3 py-2 text-sm text-black",
}: NewsletterSignupFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("loading");
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("email", email);

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const data = (await res.json()) as {
        ok: boolean;
        message?: string;
      };

      if (!res.ok || !data.ok) {
        setState("error");
        setMessage(data.message || "Could not subscribe right now.");
        return;
      }

      setState("success");
      setMessage("You are subscribed!");
      setEmail("");
    } catch {
      setState("error");
      setMessage("Could not subscribe right now.");
    }
  };

  return (
    <>
      <form className={formClassName} onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={inputPlaceholder}
          className={inputClassName}
          disabled={state === "loading"}
        />
        <button
          type="submit"
          className={buttonClassName}
          disabled={state === "loading"}
        >
          {state === "loading" ? "Sending..." : buttonLabel}
        </button>
      </form>

      {state === "success" && <p className={successClassName}>{message}</p>}
      {state === "error" && <p className={errorClassName}>{message}</p>}
    </>
  );
}
