"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type SubminBtnProps = {
  children: React.ReactNode;
  className: string;
  imgOne: string;
  imgSec: string;
} & ComponentProps<"button">;

export default function SubminBtn({
  children,
  className,
  imgOne,
  imgSec,
  ...props
}: SubminBtnProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      disabled={!(imgOne && imgSec)}
      type="submit"
      className={`${className} btn btn-error`}
    >
      {pending && (
        <span className="loading loading-spinner loading-sm text-primary" />
      )}
      {children}
    </button>
  );
}
