import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sarker Trims | Garment Trims & Packaging Manufacturer in Dhaka",
  description:
    "Learn about Sarker Trims, established in 2015 in Dhaka. B2B manufacturer of draw cords, plain and jacquard elastics, twill tapes, printed/woven labels, and corrugated export carton boxes.",
};

export default function AboutPage() {
  const credentials = [
    { label: "Established", value: "2015" },
    {
      label: "Location",
      value: "30/31 Purana Mugoltuli, Dhaka 1100, Bangladesh",
    },
    {
      label: "Facility",
      value: "Approx. 3,000 sq ft manufacturing facility, 20+ production machines",
    },
    { label: "Workforce", value: "25+ skilled production staff" },
    {
      label: "Business model",
      value:
        "B2B manufacturing — custom sample development, lab dips, rapid prototyping, and bulk production",
    },
    {
      label: "Products",
      value:
        "Draw cords & drawstrings with custom aglets, plain knitted & braided elastic (up to 15cm), jacquard elastic bands (up to 5.5cm), needle loom herringbone twill tape, printed care labels, woven damask labels & badges, 3-ply, 5-ply & 7-ply corrugated export cartons",
    },
    {
      label: "Capabilities",
      value:
        "Needle loom weaving, computerized jacquard weaving, multi-spindle cord braiding, tipping & aglet crimping (silicone, metal, heat-shrink), rotary label printing, ultrasonic cutting & folding, corrugated carton converting, in-house tensile & stretch testing, QC inspection",
    },
    {
      label: "Markets served",
      value: "Garment exporters, buying houses, and fashion apparel brands across Bangladesh",
    },
    {
      label: "Business hours",
      value: "Saturday – Thursday, 9:00 AM – 10:00 PM (GMT+6)",
    },
    { label: "Languages", value: "English, Bengali" },
  ];

  return (
    <main className="bg-slate-50 text-slate-900 leading-[1.6]">
      <section className="[background:radial-gradient(circle_at_84%_17%,rgba(17,19,123,0.08),transparent_30%),linear-gradient(rgba(17,19,123,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(17,19,123,0.025)_1px,transparent_1px)] [background-size:auto,40px_40px,40px_40px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 grid grid-cols-1 items-center gap-8 pb-16 sm:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div>
            <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#11137b]">
              About Sarker Trims
            </div>
            <h1 className="tracking-[-0.025em] font-bold mb-6 mt-[14px] text-[clamp(40px,5.5vw,70px)] leading-[1.02] max-[580px]:text-[38px] text-slate-900">
              Garment trims and packaging partner you can rely on.
            </h1>
            <p className="max-w-[720px] text-[19px] text-slate-600">
              Sarker Trims manufactures draw cords, plain and jacquard elastics, twill tapes, printed and woven items, and corrugated export carton boxes in Dhaka. Founded in 2015 by Golam Kibria Chowdhury and led by Managing Director Tareq Chowdhury, we supply apparel factories with fast 1-day sampling, technical consistency, and reliable bulk delivery.
            </p>
          </div>
          <aside
            id="profile"
            aria-label="Sarker Trims company at a glance"
            className="relative overflow-hidden rounded-[30px] bg-[#0c1033] p-[34px] text-white shadow-[0_18px_55px_rgba(17,19,123,0.15)] after:absolute after:-right-[70px] after:-top-[60px] after:h-[180px] after:w-[180px] after:rounded-full after:border after:border-white/[0.12] after:content-['']"
          >
            <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-blue-300">
              Company at a glance
            </div>
            <h2 className="tracking-[-0.025em] font-bold mb-2 text-[27px]">
              Sarker Trims
            </h2>
            <p className="mb-[26px] text-[14px] text-slate-300">
              B2B manufacturer of garment trims, narrow fabrics &amp; export packaging at 30/31 Purana Mugoltuli, Dhaka 1100, Bangladesh.
            </p>
            <div className="grid grid-cols-2 border-t border-white/[0.18] max-[580px]:grid-cols-1">
              <div className="border-b border-white/[0.18] py-[18px] odd:border-r odd:border-white/[0.18] odd:pr-[18px] even:pl-[18px] max-[580px]:odd:border-r-0 max-[580px]:odd:pr-0 max-[580px]:even:pl-0">
                <b className="block text-[24px]">2015</b>
                <span className="text-[12px] text-blue-200">
                  Established in Dhaka
                </span>
              </div>
              <div className="border-b border-white/[0.18] py-[18px] odd:border-r odd:border-white/[0.18] odd:pr-[18px] even:pl-[18px] max-[580px]:odd:border-r-0 max-[580px]:odd:pr-0 max-[580px]:even:pl-0">
                <b className="block text-[24px]">3,000</b>
                <span className="text-[12px] text-blue-200">
                  sq ft production floor
                </span>
              </div>
              <div className="border-b border-white/[0.18] py-[18px] odd:border-r odd:border-white/[0.18] odd:pr-[18px] even:pl-[18px] max-[580px]:odd:border-r-0 max-[580px]:odd:pr-0 max-[580px]:even:pl-0">
                <b className="block text-[24px]">25+</b>
                <span className="text-[12px] text-blue-200">
                  production team
                </span>
              </div>
              <div className="border-b border-white/[0.18] py-[18px] odd:border-r odd:border-white/[0.18] odd:pr-[18px] even:pl-[18px] max-[580px]:odd:border-r-0 max-[580px]:odd:pr-0 max-[580px]:even:pl-0">
                <b className="block text-[24px]">20+</b>
                <span className="text-[12px] text-blue-200">
                  weaving &amp; converting units
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Business snapshot">
        <dl className="grid grid-cols-4 overflow-hidden rounded-3xl border border-slate-200 bg-white max-[900px]:grid-cols-2 max-[580px]:grid-cols-1 shadow-sm">
          <div className="border-r border-slate-200 p-7 last:border-r-0 max-[900px]:border-b max-[900px]:[&:nth-child(2)]:border-r-0 max-[580px]:border-r-0">
            <dt className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-slate-500">
              Business type
            </dt>
            <dd className="mt-2 font-[Georgia,serif] text-[28px] text-slate-900">Manufacturer</dd>
            <dd className="mt-1 text-[13px] text-slate-500">
              Narrow fabrics, trims &amp; corrugated cartons
            </dd>
          </div>
          <div className="border-r border-slate-200 p-7 last:border-r-0 max-[900px]:border-b max-[900px]:[&:nth-child(2)]:border-r-0 max-[580px]:border-r-0">
            <dt className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-slate-500">
              Primary customers
            </dt>
            <dd className="mt-2 font-[Georgia,serif] text-[28px] text-slate-900">B2B</dd>
            <dd className="mt-1 text-[13px] text-slate-500">
              Garment factories &amp; international brands
            </dd>
          </div>
          <div className="border-r border-slate-200 p-7 last:border-r-0 max-[900px]:border-b max-[900px]:[&:nth-child(2)]:border-r-0 max-[580px]:border-r-0">
            <dt className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-slate-500">
              Core capability
            </dt>
            <dd className="mt-2 font-[Georgia,serif] text-[28px] text-[#11137b]">1-Day Sampling</dd>
            <dd className="mt-1 text-[13px] text-slate-500">
              Rapid prototyping &amp; 3-day bulk turnaround
            </dd>
          </div>
          <div className="border-r border-slate-200 p-7 last:border-r-0 max-[900px]:border-b max-[900px]:[&:nth-child(2)]:border-r-0 max-[580px]:border-r-0">
            <dt className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-slate-500">
              Operating base
            </dt>
            <dd className="mt-2 font-[Georgia,serif] text-[28px] text-slate-900">Dhaka</dd>
            <dd className="mt-1 text-[13px] text-slate-500">
              30/31 Purana Mugoltuli, Dhaka 1100
            </dd>
          </div>
        </dl>
      </div>

      <section className="py-16 md:py-24" id="story">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div>
              <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#11137b]">
                Our story
              </div>
              <h2 className="my-[10px] text-[clamp(36px,4.5vw,58px)] leading-[1.04] tracking-[-0.025em] font-bold text-slate-900">
                Built to be Bangladesh’s dependable trims and packaging source.
              </h2>
            </div>
            <div className="pt-7 text-[17px] text-slate-600 max-[900px]:pt-0" />
          </div>
          <div className="grid grid-cols-[0.95fr_1.05fr] gap-20 max-[900px]:grid-cols-1">
            <div>
              <p className="mb-[1em] text-[18px] text-slate-600">
                Sarker Trims was founded in 2015 by Golam Kibria Chowdhury, with his son Tareq Chowdhury leading the business as Managing Director. Their vision was simple: provide garment manufacturers in Bangladesh with an agile local supplier for high-spec narrow fabrics, trims, and packaging that match approved lab dips and buyer tech packs without delays.
              </p>
              <p className="mb-[1em] text-[18px] text-slate-600">
                From our facility in Dhaka, Sarker Trims operates dedicated needle looms, computerized jacquard machines, multi-spindle braiding lines, and carton converting machinery. We produce draw cords, plain and jacquard elastics, twill tapes, printed and woven items, and corrugated carton boxes tailored to buyer requirements.
              </p>
              <blockquote className="my-7 border-l-[3px] border-[#11137b] py-1 pl-[22px] font-[Georgia,serif] text-[24px] leading-[1.35] text-slate-800">
                “Understand the technical requirement, weave it carefully, and deliver on schedule.”
              </blockquote>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#11137b] px-7 py-3 text-[15px] font-bold text-white no-underline hover:bg-[#0c0e5e] transition-colors shadow-md"
              >
                Request a Quote or Sample
              </Link>
            </div>
            <ol className="relative pl-[34px] before:absolute before:bottom-2 before:left-2 before:top-[6px] before:w-px before:bg-slate-200 before:content-['']">
              <li className="relative pb-9 last:pb-0 before:absolute before:-left-[31px] before:top-[6px] before:h-3 before:w-3 before:rounded-full before:bg-[#11137b] before:shadow-[0_0_0_6px_#f8fafc] before:content-['']">
                <div className="text-[12px] font-black uppercase tracking-[0.15em] text-[#11137b]">
                  2015
                </div>
                <h3 className="tracking-[-0.025em] font-bold mb-2 mt-[6px] text-[25px] text-slate-900">
                  Sarker Trims begins
                </h3>
                <p className="m-0 text-[14px] text-slate-600">
                  Golam Kibria Chowdhury establishes Sarker Trims at Purana Mugoltuli, Dhaka, with Tareq Chowdhury as Managing Director, supporting garment manufacturers with quality trims and reliable delivery.
                </p>
              </li>
              <li className="relative pb-9 last:pb-0 before:absolute before:-left-[31px] before:top-[6px] before:h-3 before:w-3 before:rounded-full before:bg-[#11137b] before:shadow-[0_0_0_6px_#f8fafc] before:content-['']">
                <div className="text-[12px] font-black uppercase tracking-[0.15em] text-[#11137b]">
                  Expansion
                </div>
                <h3 className="tracking-[-0.025em] font-bold mb-2 mt-[6px] text-[25px] text-slate-900">
                  Specialized in narrow fabrics &amp; cartons
                </h3>
                <p className="m-0 text-[14px] text-slate-600">
                  Added computerized jacquard looms, needle loom twill tape lines, high-speed cord braiders, and corrugated carton converting to provide complete trims and packaging under one roof.
                </p>
              </li>
              <li className="relative pb-9 last:pb-0 before:absolute before:-left-[31px] before:top-[6px] before:h-3 before:w-3 before:rounded-full before:bg-[#11137b] before:shadow-[0_0_0_6px_#f8fafc] before:content-['']">
                <div className="text-[12px] font-black uppercase tracking-[0.15em] text-[#11137b]">
                  Today
                </div>
                <h3 className="tracking-[-0.025em] font-bold mb-2 mt-[6px] text-[25px] text-slate-900">
                  3,000 sq ft modern facility
                </h3>
                <p className="m-0 text-[14px] text-slate-600">
                  25+ skilled operators and technicians manage weaving, braiding, tipping, printing, and packaging with 1-day sample turnaround and 3-day bulk production.
                </p>
              </li>
              <li className="relative pb-9 last:pb-0 before:absolute before:-left-[31px] before:top-[6px] before:h-3 before:w-3 before:rounded-full before:bg-[#11137b] before:shadow-[0_0_0_6px_#f8fafc] before:content-['']">
                <div className="text-[12px] font-black uppercase tracking-[0.15em] text-[#11137b]">
                  Commitment
                </div>
                <h3 className="tracking-[-0.025em] font-bold mb-2 mt-[6px] text-[25px] text-slate-900">
                  Zero tolerance on quality deviations
                </h3>
                <p className="m-0 text-[14px] text-slate-600">
                  Strict tensile, elongation, and wash-fastness standards ensure our trims and corrugated shipping boxes meet international apparel compliance tests.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" id="leadership">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-[0.8fr_1.2fr] items-start gap-14 max-[900px]:grid-cols-1">
          <div>
            <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#11137b]">
              Leadership &amp; team
            </div>
            <h2 className="tracking-[-0.025em] font-bold mb-[0.83em] text-[48px] leading-[1.03] text-slate-900">
              Hands-on leadership with a dedicated production team.
            </h2>
            <p className="mb-[1em] text-slate-600">
              Sarker Trims is led by its founder and managing director. Both are actively involved on the factory floor every day, which means technical decisions on yarn counts, stretch elasticity, tipping molds, and carton ply ratings are resolved immediately.
            </p>
            <p className="mb-[1em] text-slate-600">
              Our team of 25+ skilled loom operators, braiders, printers, and packaging technicians bring deep manufacturing expertise across narrow fabrics and corrugated board production.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[18px] max-[900px]:grid-cols-1">
            <article className="overflow-hidden rounded-[22px] border border-slate-200 bg-slate-50/50 shadow-sm">
              <div
                aria-hidden="true"
                className="grid h-[260px] place-items-center bg-[linear-gradient(135deg,#e2e8f0,#edf2f7)]"
              >
                <Image
                  alt="Golam Kibria Chowdhury"
                  width={500}
                  height={500}
                  src="/people/golam-kibria-portrait.jpeg"
                  className="rounded-full size-48 object-cover"
                />
              </div>
              <div className="p-5">
                <div className="text-[11px] font-black uppercase tracking-[0.12em] text-[#11137b]">
                  Founder
                </div>
                <h3 className="tracking-[-0.025em] font-bold my-1 text-[22px] text-slate-900">
                  Golam Kibria Chowdhury
                </h3>
                <p className="m-0 text-[13px] text-slate-600">
                  Established Sarker Trims in 2015 and set the uncompromising quality standards the factory upholds today. Continues to guide long-term strategy.
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[22px] border border-slate-200 bg-slate-50/50 shadow-sm">
              <div
                aria-hidden="true"
                className="grid h-[260px] place-items-center bg-[linear-gradient(135deg,#e2e8f0,#edf2f7)]"
              >
                <Image
                  alt="Tareq Chowdhury"
                  width={500}
                  height={500}
                  src="/people/tareq-chowdhury.jpg"
                  className="rounded-full size-48 object-cover"
                />
              </div>
              <div className="p-5">
                <div className="text-[11px] font-black uppercase tracking-[0.12em] text-[#11137b]">
                  Managing Director
                </div>
                <h3 className="tracking-[-0.025em] font-bold my-1 text-[22px] text-slate-900">
                  Tareq Chowdhury
                </h3>
                <p className="m-0 text-[13px] text-slate-600">
                  Manages operations, sample approvals, customer development, and bulk scheduling. He acts as the direct point of contact for factory merchandisers and buyer technical teams.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50" id="mission">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div>
              <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#11137b]">
                Direction
              </div>
              <h2 className="my-[10px] text-[clamp(36px,4.5vw,58px)] leading-[1.04] tracking-[-0.025em] font-bold text-slate-900">
                Mission, vision and our manufacturing principles.
              </h2>
            </div>
            <div className="pt-7 text-[17px] text-slate-600 max-[900px]:pt-0" />
          </div>
          <div className="grid grid-cols-2 gap-[18px] max-[900px]:grid-cols-1">
            <article className="rounded-3xl border border-slate-200 bg-white p-[34px] shadow-sm">
              <div className="text-[11px] font-black uppercase tracking-[0.14em] text-[#11137b]">
                Our mission
              </div>
              <p className="mb-[1em] text-[16px] text-slate-600">
                Provide garment factories with a dependable manufacturing partner for draw cords, elastics, twill tapes, labels, and export cartons — offering 1-day sampling, technical accuracy, and bulk delivery on schedule.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-[34px] shadow-sm">
              <div className="text-[11px] font-black uppercase tracking-[0.14em] text-[#11137b]">
                Our vision
              </div>
              <p className="mb-[1em] text-[16px] text-slate-600">
                Serve as Bangladesh’s most reliable narrow fabrics and corrugated packaging producer by investing in high-speed looms, precision tipping technology, and rigorous quality control.
              </p>
            </article>
          </div>
          <ul className="mt-[18px] grid grid-cols-4 gap-[14px] max-[900px]:grid-cols-2 max-[580px]:grid-cols-1">
            <li className="min-h-[180px] rounded-[20px] bg-[#0c1033] p-6 text-white shadow-md">
              <span className="text-[12px] text-blue-300">01</span>
              <b className="mt-10 block font-[Georgia,serif] text-[22px]">
                Quality before shortcuts
              </b>
            </li>
            <li className="min-h-[180px] rounded-[20px] bg-[#0c1033] p-6 text-white shadow-md">
              <span className="text-[12px] text-blue-300">02</span>
              <b className="mt-10 block font-[Georgia,serif] text-[22px]">
                1-day sampling speed
              </b>
            </li>
            <li className="min-h-[180px] rounded-[20px] bg-[#0c1033] p-6 text-white shadow-md">
              <span className="text-[12px] text-blue-300">03</span>
              <b className="mt-10 block font-[Georgia,serif] text-[22px]">
                Bulk consistency
              </b>
            </li>
            <li className="min-h-[180px] rounded-[20px] bg-[#0c1033] p-6 text-white shadow-md">
              <span className="text-[12px] text-blue-300">04</span>
              <b className="mt-10 block font-[Georgia,serif] text-[22px]">
                Long-term trust
              </b>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-white border-t border-slate-200"
        id="company-profile"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-[0.95fr_1.05fr] gap-[60px] max-[900px]:grid-cols-1">
          <div>
            <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#11137b]">
              Company credentials
            </div>
            <h2 className="tracking-[-0.025em] font-bold mb-[0.83em] text-[46px] leading-[1.05] text-slate-900">
              Sarker Trims at a glance for sourcing teams.
            </h2>
            <p className="mb-[1em] text-slate-600">
              The essential information merchandisers, buying houses, and sourcing heads need when onboarding a trims and packaging supplier: facilities, capabilities, machinery, and lead times.
            </p>
            <p className="mb-[1em] mt-4 text-[13px] text-slate-500">
              Need company profile documents, certifications, or want to schedule a factory visit? Email{" "}
              <a href="mailto:info@sarkertrims.com" className="underline font-semibold text-[#11137b]">
                info@sarkertrims.com
              </a>{" "}
              and our management will respond within one working day.
            </p>
          </div>
          <dl className="overflow-hidden rounded-[22px] border border-slate-200 bg-slate-50/50 shadow-sm">
            {credentials.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[180px_1fr] border-b border-slate-200 last:border-b-0 max-[580px]:grid-cols-1"
              >
                <dt className="bg-slate-100/80 px-[18px] py-[15px] text-[12px] font-extrabold uppercase tracking-[0.07em] text-slate-600 max-[580px]:border-b max-[580px]:border-slate-200">
                  {item.label}
                </dt>
                <dd className="px-[18px] py-[15px] text-[14px] text-slate-800">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
