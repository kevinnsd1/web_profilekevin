import React, { useState } from "react";
import { NeoModal, NeoInput, NeoTextarea, NeoButton, NeoBadge } from "./neobrutalism";
import { Send, CheckCircle2, Sparkles } from "lucide-react";

interface NeoContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NeoContactModal: React.FC<NeoContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      onClose();
    }, 2500);
  };

  return (
    <NeoModal
      isOpen={isOpen}
      onClose={onClose}
      title="GET IN TOUCH // SAY HELLO"
      headerBg="yellow"
      maxWidth="lg"
    >
      {submitted ? (
        <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-[#A3E635] text-black border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000]">
            <CheckCircle2 size={36} strokeWidth={3} />
          </div>
          <NeoBadge variant="green" size="lg" rotate="right">
            MESSAGE SENT SUCCESSFULLY!
          </NeoBadge>
          <h3 className="font-heading font-black text-2xl uppercase">
            Thanks for reaching out!
          </h3>
          <p className="text-sm font-bold text-neutral-600 max-w-sm">
            I've received your message and will reply to your email as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center gap-2 mb-2">
            <NeoBadge variant="pink" rotate="left" icon={<Sparkles size={14} />}>
              LET'S BUILD TOGETHER
            </NeoBadge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NeoInput
              label="Your Name"
              placeholder="e.g. Alex Rivera"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <NeoInput
              label="Your Email"
              type="email"
              placeholder="alex@company.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <NeoInput
            label="Subject"
            placeholder="Project inquiry / Freelance / Hello"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />

          <NeoTextarea
            label="Message"
            placeholder="Tell me about your project, timeline, or idea..."
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          <div className="pt-2 flex justify-end gap-3">
            <NeoButton
              type="button"
              variant="white"
              size="md"
              shadowSize="sm"
              onClick={onClose}
            >
              CANCEL
            </NeoButton>
            <NeoButton
              type="submit"
              variant="yellow"
              size="md"
              shadowSize="md"
              icon={<Send size={18} />}
            >
              SEND MESSAGE
            </NeoButton>
          </div>
        </form>
      )}
    </NeoModal>
  );
};
