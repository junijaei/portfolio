export default function Card({
  title,
  contents,
}: {
  title: string;
  contents: string[];
}) {
  return (
    <div className={'flex flex-col gap-4 rounded-lg border border-white p-4'}>
      <h2 className={'text-xl'}>{title}</h2>
      <hr className={'bg-white'} />
      {contents.map((content, index) => (
        <p key={`card_contents_${index}`}>{content}</p>
      ))}
    </div>
  );
}
