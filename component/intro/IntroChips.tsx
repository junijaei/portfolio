export default function IntroChips() {
  return (
    <div className={'ml-2 flex items-center gap-2 text-sm lg:text-base'}>
      <div className={'relative h-2 w-2'}>
        <div
          className={'bg-primary absolute h-2 w-2 animate-ping rounded-full'}
        />
        <div className={'bg-primary absolute h-2 w-2 rounded-full'} />
      </div>
      building resume artifact…
    </div>
  );
}
