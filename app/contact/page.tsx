"use client";

import { useState } from "react";
import {
  FileText,
  Upload,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  Camera,
  Ruler,
  Palette,
  Calendar,
  CheckSquare,
  Download,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles].slice(0, 5));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="py-16 md:py-24 pt-16 md:pt-20" id="contact">
      <header className="mb-12 container mx-auto px-4 sm:px-6 lg:px-8 space-y-4 md:space-y-6">
        <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#b56b3d]">
          Contact Us
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Request a Sample or Quote
        </h1>
        <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-muted-foreground">
          Tell us what you need. We’ll reply in 1 working day with samples and
          pricing.
        </p>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-lg border border-border bg-white p-5 sm:p-7 shadow-sm"
        >
          <h2 className="text-base font-semibold">Your project details</h2>

          {isSubmitted ? (
            <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center text-green-800">
              <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
              <p className="text-sm">
                Your request has been received. Our team will review your project
                details and reply within one working day.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                <div className="min-w-0 space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-[13px] font-semibold"
                  >
                    Contact person<span className="ml-1 text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    id="name"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="flex h-12 w-full rounded-md border border-input bg-card px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/75 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div className="min-w-0 space-y-2">
                  <label
                    htmlFor="company"
                    className="block text-[13px] font-semibold"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="flex h-12 w-full rounded-md border border-input bg-card px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/75 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div className="min-w-0 space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-[13px] font-semibold"
                  >
                    Email<span className="ml-1 text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    id="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="flex h-12 w-full rounded-md border border-input bg-card px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/75 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div className="min-w-0 space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-[13px] font-semibold"
                  >
                    Phone<span className="ml-1 text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex h-12 w-full rounded-md border border-input bg-card px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/75 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              <div className="min-w-0 space-y-2">
                <label
                  htmlFor="attachments"
                  className="block text-[13px] font-semibold"
                >
                  Attachments
                  <span className="ml-1 font-normal text-muted-foreground">
                    (optional)
                  </span>
                </label>
                <div className="flex min-h-16 items-center gap-3 rounded-md border border-dashed px-3.5 py-3 transition-colors border-input bg-background">
                  <input
                    id="attachments"
                    type="file"
                    multiple
                    accept="image/*,.pdf,application/pdf"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="attachments"
                    className="flex shrink-0 cursor-pointer items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-slate-50"
                  >
                    <Upload className="size-4" />
                    Choose files
                  </label>
                  <p className="min-w-0 flex-1 text-xs text-muted-foreground">
                    {files.length > 0
                      ? `${files.length} file(s) selected: ${files
                          .map((f) => f.name)
                          .join(", ")}`
                      : "Images and PDF only"}
                    <span className="mt-0.5 block text-[10px]">
                      Up to 5 files, 4 MB each, 20 MB total
                    </span>
                  </p>
                </div>
              </div>

              <div className="min-w-0 space-y-2">
                <label
                  htmlFor="message"
                  className="block text-[13px] font-semibold"
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    placeholder="Share details about your project, style, finish, or special requirements…"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="flex min-h-28 w-full resize-y rounded-md border border-input bg-card px-3.5 py-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground/75 focus:border-primary focus:ring-2 focus:ring-primary/10 pb-7"
                  />
                  <span className="pointer-events-none absolute bottom-3 right-3.5 text-[11px] text-muted-foreground">
                    {formData.message.length} / 500
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 w-full gap-2 shadow"
              >
                <Send className="size-4" />
                Send Request
              </button>
            </>
          )}
        </form>

        <aside
          className="space-y-4"
          aria-label="Quote guidance and contact details"
        >
          <section className="overflow-hidden rounded-lg border bg-white shadow-sm">
            <h2 className="flex items-center gap-3 bg-primary px-5 py-4 text-[15px] font-semibold text-white">
              <FileText className="size-4" />
              What to send for a fast quote
            </h2>
            <div className="grid sm:grid-cols-[1.05fr_1fr] lg:grid-cols-1 xl:grid-cols-[1.05fr_1fr]">
              <ul className="divide-y divide-border px-4 py-2">
                <li className="flex gap-3 py-3.5">
                  <Camera className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-semibold leading-5">
                      Clear product photo or sketch
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-4 text-muted-foreground">
                      Front, back &amp; close-up views
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 py-3.5">
                  <Ruler className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-semibold leading-5">
                      Size / measurement details
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-4 text-muted-foreground">
                      Custom size or important fit details
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 py-3.5">
                  <Palette className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-semibold leading-5">
                      Material, color &amp; finish
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-4 text-muted-foreground">
                      Leather type, metal finish, color reference
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 py-3.5">
                  <Calendar className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-semibold leading-5">
                      Quantity &amp; need-by date
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-4 text-muted-foreground">
                      Helps us plan and quote accurately
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 py-3.5">
                  <CheckSquare className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-semibold leading-5">
                      Any special requirements
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-4 text-muted-foreground">
                      Logo, stitching, packaging, compliance
                    </p>
                  </div>
                </li>
              </ul>
              <div className="border-t border-border bg-[#fbfaf8] px-4 py-5 sm:border-l sm:border-t-0 lg:border-l-0 lg:border-t xl:border-l xl:border-t-0 text-sm">
                <h3 className="mb-3 font-semibold">WhatsApp Business</h3>
                <a
                  href="https://wa.me/8801918920092"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-3 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <div className="mt-5 space-y-4">
                  <div className="flex gap-3">
                    <Phone className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-xs">Phone</h4>
                      <a
                        href="tel:+8801302250001"
                        className="mt-1 block text-xs text-muted-foreground hover:text-primary"
                      >
                        +880 1302-250001
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-xs">Email</h4>
                      <a
                        href="mailto:info@sarkertrims.com"
                        className="mt-1 block break-all text-xs text-muted-foreground hover:text-primary"
                      >
                        info@sarkertrims.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-xs">Factory address</h4>
                      <p className="mt-1 block break-all text-xs text-muted-foreground">
                        30/31 Purana Mugoltuli, Dhaka,
                        <br />
                        Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-xs">Business hours</h4>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        Sat – Thu
                        <br />
                        9:00 AM – 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <a
            href="/Sarker-Trims-Company-Profile-2026.pdf"
            download
            className="flex w-full items-center gap-3 rounded-lg border border-primary bg-card px-5 py-4 text-left transition-colors hover:bg-muted"
          >
            <Download className="size-5 text-primary shrink-0" />
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-semibold">
                Download our capability PDF
              </span>
              <span className="mt-1 block text-[11px] text-muted-foreground">
                Keep a copy of your project details
              </span>
            </span>
          </a>

          <div className="h-64 overflow-hidden rounded-lg border bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.871694719142!2d90.40802017469358!3d23.71627549008674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e9c3c15d67%3A0x3a55894a4e79b100!2sSarker%20Trims!5e0!3m2!1sen!2sbd!4v1790424849913!5m2!1sen!2sbd"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sarker Trims Factory Location"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
