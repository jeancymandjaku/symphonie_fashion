import { WHATSAPP } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Discuter avec une conseillère sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background px-4 py-2 text-[10px] tracking-luxury uppercase opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        Discuter avec une conseillère
      </span>
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.42 0 .07 5.35.07 11.95c0 2.1.55 4.16 1.6 5.98L0 24l6.23-1.63a11.93 11.93 0 0 0 5.78 1.47h.01c6.6 0 11.95-5.35 11.95-11.95 0-3.19-1.24-6.19-3.45-8.41ZM12.02 21.8h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.7.97.99-3.6-.24-.37a9.85 9.85 0 1 1 18.27-5.26 9.84 9.84 0 0 1-9.93 9.85Zm5.4-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </span>
    </a>
  );
}
