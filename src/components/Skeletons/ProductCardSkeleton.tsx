export default function ProductCardSkeleton() {
  return (
    <div className="relative flex h-auto max-w-full flex-col gap-4">
      <div className="skeleton h-[280px] w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  );
}

export function ListCardSkeleton(): JSX.Element {
  return (
    <div className="m-auto grid max-w-7xl gap-4 px-4 pb-8 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  );
}
