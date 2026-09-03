export default function ProjectCover({ title, image, className = 'aspect-[16/10]' }) {
  if (image) {
    return (
      <div className={`overflow-hidden bg-evolyx-black-deep ${className}`}>
        <img
          src={image}
          alt=""
          width={1600}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center relative overflow-hidden ${className}`}
      style={{
        background:
          'linear-gradient(135deg, rgba(212,175,55,0.22) 0%, transparent 45%), linear-gradient(315deg, rgba(212,175,55,0.10) 0%, transparent 55%), #1e1e1c',
      }}
    >
      <span className="font-display text-2xl font-bold text-evolyx-gold/75 tracking-tight px-4 text-center">
        {title}
      </span>
    </div>
  );
}
