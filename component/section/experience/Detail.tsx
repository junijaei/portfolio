export default function Detail({
  title,
  content,
}: {
  title: string;
  content: string | string[];
}) {
  return (
    <>
      <p className={'text-content-500'}>{title}</p>
      {Array.isArray(content) ? (
        <ul className={'ml-2 flex flex-col gap-1'}>
          {content.map((c, index) => (
            <li key={index}>· {c}</li>
          ))}
        </ul>
      ) : (
        <p className={'ml-2'}>{content}</p>
      )}
    </>
  );
}
