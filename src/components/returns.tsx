import Link from 'fumadocs-core/link';

interface ReturnsProps {
  type: string;
  description?: string;
  link?: string;
}

export function Returns({ type, description, link }: ReturnsProps) {
  return (
    <div className='p-3 bg-fd-card text-fd-card-foreground border rounded-2xl'>
      <code className='font-mono'>
        {link ? <Link href={link}>{type}</Link> : type}
      </code>
      {description && <span className='ml-2'>{description}</span>}
    </div>
  );
}
