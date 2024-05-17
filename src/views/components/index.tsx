import dynamic from "next/dynamic";

const Button = dynamic(() => import("@/components/button"));

export default function ComponentView() {
  return (
    <section className="bg-slate-300 w-full min-h-screen flex flex-col p-10 gap-10">
      <div className="flex gap-x-4">
        <Button variant="success">success</Button>
        <Button variant="danger">danger</Button>
        <Button variant="warning">warning</Button>
        <Button variant="primary">primary</Button>
        <Button variant="gray">gray</Button>
      </div>
    </section>
  );
}
