export default function cloudinaryLoader({ src }: { src: string; width: number; quality?: number }) {
  if (!src.includes('res.cloudinary.com')) return src;
  if (src.includes('f_auto')) return src;
  return src.replace('/upload/', '/upload/f_auto,q_auto/');
}