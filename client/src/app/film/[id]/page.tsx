import { Film } from "@/ui/pages/Film";

export default function Home({ params }: { params: { id: string } }) {
  return <Film movieId={params.id} />;
}
