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
