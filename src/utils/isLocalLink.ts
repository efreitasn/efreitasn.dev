export default function isLocalLink(link: string): boolean {
  return /^\/.*/i.test(link);
}