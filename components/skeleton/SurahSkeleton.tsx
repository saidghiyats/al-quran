import SurahCardSkeleton from "./SurahCardSkeleton";

export default function SurahSkeleton({ length }: { length: number }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: length }, (_, index) => (
        <SurahCardSkeleton key={index} />
      ))}
    </section>
  );
}
