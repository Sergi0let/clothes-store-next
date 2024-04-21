"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="m-auto relative mt-11 flex max-w-lg flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="block h-14 w-full border bg-base-200 py-[9px] pl-4 pr-10 text-sm outline-2 placeholder:text-gray-500 md:h-16"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <svg
        className="absolute right-5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_607_257)">
          <path
            d="M27.9993 26.3511L20.6936 19.0454C22.5913 16.7244 23.5244 13.7628 23.2997 10.7732C23.0751 7.78359 21.71 4.99467 19.4868 2.98333C17.2635 0.971984 14.3523 -0.107904 11.3552 -0.0329664C8.35806 0.0419707 5.50441 1.266 3.38447 3.38594C1.26453 5.50588 0.0405059 8.35953 -0.0344312 11.3566C-0.109368 14.3537 0.97052 17.265 2.98186 19.4882C4.99321 21.7115 7.78213 23.0766 10.7717 23.3012C13.7614 23.5258 16.723 22.5928 19.0439 20.6951L26.3496 28.0007L27.9993 26.3511ZM11.6659 21.0007C9.81996 21.0007 8.01546 20.4533 6.4806 19.4278C4.94574 18.4022 3.74947 16.9445 3.04305 15.2391C2.33663 13.5337 2.1518 11.657 2.51193 9.84655C2.87206 8.03606 3.76097 6.37301 5.06626 5.06773C6.37155 3.76243 8.03459 2.87352 9.84508 2.51339C11.6556 2.15326 13.5322 2.33809 15.2376 3.04451C16.9431 3.75093 18.4007 4.94721 19.4263 6.48207C20.4519 8.01692 20.9993 9.82143 20.9993 11.6674C20.9965 14.1419 20.0123 16.5142 18.2625 18.264C16.5128 20.0137 14.1404 20.9979 11.6659 21.0007Z"
            fill="#161616"
          />
        </g>
        <defs>
          <clipPath id="clip0_607_257">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
