import ProductCardSkeleton, { ListCardSkeleton } from "./ProductCardSkeleton";

export function GenderPageSkeleton() {
  return (
    <div className="m-auto max-w-7xl px-4">
      <div className="skeleton mt-6 h-3 w-10 md:mt-12" />
      <div className="mb-6 mt-4 flex flex-col gap-2 md:mb-12 md:mt-6 md:flex-row md:items-end md:gap-4">
        <span className="skeleton h-6 w-28 md:h-8 md:w-44" />
        <span className="skeleton h-3 w-24" />
      </div>
      <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        <div className="skeleton h-32 md:h-52 md:w-full" />
        <div className="skeleton h-32 md:h-52 md:w-full" />
        <div className="skeleton h-32 md:h-52 md:w-full" />
        <div className="skeleton h-32 md:h-52 md:w-full" />
      </div>
      <div className="skeleton mb-10 h-6 w-28 md:hidden md:h-8 md:w-44" />
      <div className="mb-6 md:mb-12 md:flex">
        <div className="mr-16 hidden space-y-6 md:block">
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-3">
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </div>
      </div>
    </div>
  );
}

export function CategoryPageSkeleton() {
  return (
    <div className="m-auto max-w-7xl px-4">
      <div className="skeleton mt-6 h-3 w-10 md:mt-12" />
      <div className="mb-6 mt-4 flex flex-col gap-2 md:mb-12 md:mt-6 md:flex-row md:items-end md:gap-4">
        <span className="skeleton h-6 w-28 md:h-8 md:w-44" />
        <span className="skeleton h-3 w-24" />
      </div>

      <div className="skeleton mb-10 h-6 w-28 md:hidden md:h-8 md:w-44" />
      <div className="mb-6 md:mb-12 md:flex">
        <div className="mr-16 hidden space-y-6 md:block">
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-3">
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </div>
      </div>
    </div>
  );
}

export function ProductCardPageSkeleton() {
  return (
    <div className="m-auto max-w-7xl px-4">
      <div className="mt-8 flex">
        <div className="skeleton mr-2 h-4 w-14"></div>
        <div className="skeleton mr-2 h-4 w-14"></div>
        <div className="skeleton h-4 w-14"></div>
      </div>
      <div className="max-w-100%  my-6 flex flex-col gap-4 md:my-12 md:flex-row">
        <div className="skeleton h-80 w-2/4 md:h-[700px]"></div>
        <div className="flex-1">
          <div className="skeleton h-10"></div>
          <div className="skeleton mt-3 h-10 w-1/2"></div>
          <div className="mt-8 flex">
            <div className="skeleton mr-2 h-4 w-24"></div>
            <div className="skeleton h-4 w-24"></div>
          </div>
          <div className="mt-4 flex">
            <div className="skeleton mr-2 h-4 w-24"></div>
            <div className="skeleton h-4 w-24"></div>
          </div>
          <div className="mt-16 flex">
            <div className="skeleton mr-2 h-8 w-1/3"></div>
            <div className="skeleton h-8 w-1/3"></div>
          </div>
          <div className="skeleton mt-8 h-16 w-full"></div>
          <div className="mt-8 flex">
            <div className="skeleton mr-2 h-4 w-2/3"></div>
            <div className="skeleton h-4 flex-1"></div>
          </div>
          <div className="mt-4 flex">
            <div className="skeleton mr-2 h-4 flex-1"></div>
            <div className="skeleton  h-4 w-2/3"></div>
          </div>
          <div className="mt-4 flex">
            <div className="skeleton mr-2 h-4 w-2/3"></div>
            <div className="skeleton h-4 flex-1"></div>
          </div>
          <div className="mt-4 flex">
            <div className="skeleton mr-2 h-4 w-2/3"></div>
            <div className="skeleton h-4 flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroPageSkeleton() {
  return (
    <>
      <div className="m-auto flex max-w-[1400px] flex-col pt-8 md:flex-row">
        <div className="skeleton flex min-h-[360px] items-center justify-center md:h-[400px] md:w-1/2">
          <svg
            className="h-40 w-40 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="skeleton flex h-52 min-h-[360px] items-center justify-center md:h-[400px] md:w-1/2">
          <svg
            className="h-40 w-40 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <ListCardSkeleton />
    </>
  );
}
