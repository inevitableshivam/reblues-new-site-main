import React from "react";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-4xl h-[85vh] max-h-[720px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#FE6B00]" />
            <span className="font-mono text-xs font-semibold tracking-wider text-neutral-800 dark:text-neutral-200 uppercase">
              Book a Discovery Call &bull; Reblues
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content - Calendly Embed */}
        <div className="relative flex-1 w-full bg-white">
          <iframe
            src="https://calendly.com/rebluesagency/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=0a0a0a&primary_color=fe6b00"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full border-0"
            title="Book a Call with Reblues"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
