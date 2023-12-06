export default function Image({src,...rest}) {
  src = src && src.includes('https://')
    ? src
    : 'https://tourist-guide-server-1.vercel.app/uploads/'+src;
  return (
    <img {...rest} src={src} alt={''} />
  );
}