export default function ProductCardSkeleton() {
  return (
    <div className="max-w100% relative flex h-auto flex-col gap-4 md:max-w-[400px]">
      <div className="skeleton h-[480px] w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  );
}

export function ListCardSkeleton(): JSX.Element {
  return (
    <div className="m-auto grid max-w-7xl gap-4 pb-8 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
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
