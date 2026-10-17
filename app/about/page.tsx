import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tuba Trims | Garment Trims Manufacturer in Dhaka, Bangladesh",
  description:
    "Learn about Tuba Trims, established in 2015 in Dhaka. B2B manufacturer of belts, patches, badges, zipper pullers, and custom garment accessories.",
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
        "B2B manufacturing — custom development, sample development and bulk production",
    },
    {
      label: "Products",
      value:
        "Leather & PU belts, woven & fabric belts, patches & badges, zipper pullers, buttons & fasteners, suspenders & cross belts, wallets & leather goods, custom branding accessories",
    },
    {
      label: "Capabilities",
      value:
        "Leather/PU cutting & skiving, webbing assembly, metal hardware fitting, embossing, debossing, hot-stamping, laser & screen-print branding, industrial stitching, in-house QC & packing",
    },
    {
      label: "Markets served",
      value: "Garment factories in Bangladesh; brands and buyers across Bangladesh",
    },
    {
      label: "Business hours",
      value: "Saturday – Thursday, 9:00 AM – 10:00 PM (GMT+6)",
    },
    { label: "Languages", value: "English, Bengali" },
  ];

  return (
    <main className="bg-[#f6f3ed] text-[#15221c] leading-[1.6]">
      <section className="[background:radial-gradient(circle_at_84%_17%,rgba(185,104,63,0.14),transparent_30%),linear-gradient(rgba(24,58,44,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(24,58,44,0.035)_1px,transparent_1px)] [background-size:auto,40px_40px,40px_40px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 grid grid-cols-1 items-center gap-8 pb-16 sm:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div>
            <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#b56b3d]">
              About Tuba Trims
            </div>
            <h1 className="tracking-[-0.025em] font-bold mb-6 mt-[14px] text-[clamp(46px,6vw,78px)] leading-[1.02] max-[580px]:text-[44px]">
              Garment trims manufacturer in Bangladesh you can rely on.
            </h1>
            <p className="max-w-[720px] text-[19px] text-[#4f5c56]">
              Tuba Trims manufactures belts, patches, badges, zipper pullers,
              buttons and custom garment accessories in Dhaka. Founded in 2015 by
              Golam Kibria Chowdhury and led by Managing Director Tareq
              Chowdhury, we supply garment factories and buyers across Bangladesh
              with reliable quality and on-time delivery.
            </p>
          </div>
          <aside
            id="profile"
            aria-label="Tuba Trims company at a glance"
            className="relative overflow-hidden rounded-[30px] bg-[#153a30] p-[34px] text-white shadow-[0_18px_55px_rgba(24,58,44,0.1)] after:absolute after:-right-[70px] after:-top-[60px] after:h-[180px] after:w-[180px] after:rounded-full after:border after:border-white/[0.12] after:content-['']"
          >
            <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#e0ae91]">
              Company at a glance
            </div>
            <h2 className="tracking-[-0.025em] font-bold mb-2 text-[27px]">
              Tuba Trims
            </h2>
            <p className="mb-[26px] text-[14px] text-[#d8e2dd]">
              B2B manufacturer of garment trims, accessories and leather goods
              at 30/31 Purana Mugoltuli, Dhaka 1100, Bangladesh.
            </p>
            <div className="grid grid-cols-2 border-t border-white/[0.18] max-[580px]:grid-cols-1">
              <div className="border-b border-white/[0.18] py-[18px] odd:border-r odd:border-white/[0.18] odd:pr-[18px] even:pl-[18px] max-[580px]:odd:border-r-0 max-[580px]:odd:pr-0 max-[580px]:even:pl-0">
                <b className="block text-[24px]">2015</b>
                <span className="text-[12px] text-[#b9cbc2]">
                  Established in Dhaka
                </span>
              </div>
              <div className="border-b border-white/[0.18] py-[18px] odd:border-r odd:border-white/[0.18] odd:pr-[18px] even:pl-[18px] max-[580px]:odd:border-r-0 max-[580px]:odd:pr-0 max-[580px]:even:pl-0">
                <b className="block text-[24px]">3,000</b>
                <span className="text-[12px] text-[#b9cbc2]">
                  sq ft manufacturing facility
                </span>
              </div>
              <div className="border-b border-white/[0.18] py-[18px] odd:border-r odd:border-white/[0.18] odd:pr-[18px] even:pl-[18px] max-[580px]:odd:border-r-0 max-[580px]:odd:pr-0 max-[580px]:even:pl-0">
                <b className="block text-[24px]">25+</b>
                <span className="text-[12px] text-[#b9cbc2]">
                  skilled production team
                </span>
              </div>
              <div className="border-b border-white/[0.18] py-[18px] odd:border-r odd:border-white/[0.18] odd:pr-[18px] even:pl-[18px] max-[580px]:odd:border-r-0 max-[580px]:odd:pr-0 max-[580px]:even:pl-0">
                <b className="block text-[24px]">20+</b>
                <span className="text-[12px] text-[#b9cbc2]">
                  production machines
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Business snapshot">
        <dl className="grid grid-cols-4 overflow-hidden rounded-3xl border border-[#d8d3c8] bg-[#f6f3ed] max-[900px]:grid-cols-2 max-[580px]:grid-cols-1">
          <div className="border-r border-[#d8d3c8] p-7 last:border-r-0 max-[900px]:border-b max-[900px]:[&:nth-child(2)]:border-r-0 max-[580px]:border-r-0">
            <dt className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#6b746f]">
              Business type
            </dt>
            <dd className="mt-2 font-[Georgia,serif] text-[28px]">Manufacturer</dd>
            <dd className="mt-1 text-[13px] text-[#6b746f]">
              Garment trims, accessories &amp; leather goods
            </dd>
          </div>
          <div className="border-r border-[#d8d3c8] p-7 last:border-r-0 max-[900px]:border-b max-[900px]:[&:nth-child(2)]:border-r-0 max-[580px]:border-r-0">
            <dt className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#6b746f]">
              Primary customers
            </dt>
            <dd className="mt-2 font-[Georgia,serif] text-[28px]">B2B</dd>
            <dd className="mt-1 text-[13px] text-[#6b746f]">
              Garment factories &amp; international brands
            </dd>
          </div>
          <div className="border-r border-[#d8d3c8] p-7 last:border-r-0 max-[900px]:border-b max-[900px]:[&:nth-child(2)]:border-r-0 max-[580px]:border-r-0">
            <dt className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#6b746f]">
              Core support
            </dt>
            <dd className="mt-2 font-[Georgia,serif] text-[28px]">End-to-end</dd>
            <dd className="mt-1 text-[13px] text-[#6b746f]">
              Development, sampling &amp; bulk production
            </dd>
          </div>
          <div className="border-r border-[#d8d3c8] p-7 last:border-r-0 max-[900px]:border-b max-[900px]:[&:nth-child(2)]:border-r-0 max-[580px]:border-r-0">
            <dt className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#6b746f]">
              Operating base
            </dt>
            <dd className="mt-2 font-[Georgia,serif] text-[28px]">Dhaka</dd>
            <dd className="mt-1 text-[13px] text-[#6b746f]">
              30/31 Purana Mugoltuli, Dhaka 1100
            </dd>
          </div>
        </dl>
      </div>

      <section className="py-16 md:py-24" id="story">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div>
              <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#b56b3d]">
                Our story
              </div>
              <h2 className="my-[10px] text-[clamp(36px,4.5vw,58px)] leading-[1.04] tracking-[-0.025em] font-bold">
                Built to be Bangladesh’s dependable garment trims partner.
              </h2>
            </div>
            <div className="pt-7 text-[17px] text-[#59645f] max-[900px]:pt-0" />
          </div>
          <div className="grid grid-cols-[0.95fr_1.05fr] gap-20 max-[900px]:grid-cols-1">
            <div>
              <p className="mb-[1em] text-[18px] text-[#505c56]">
                Tuba Trims was founded in 2015 by Golam Kibria Chowdhury, with his
                son Tareq Chowdhury leading the business as Managing Director.
                Their goal was clear: give garment factories in Bangladesh a
                dependable local source for trims and accessories that match the
                approved sample every time and ship on schedule.
              </p>
              <p className="mb-[1em] text-[18px] text-[#505c56]">
                From a first unit in Dhaka, the company has grown into a
                dedicated garment trims manufacturer, producing leather and PU
                belts, woven belts, patches and badges, zipper pullers, buttons,
                suspenders and custom trims for garment factories in Bangladesh.
              </p>
              <blockquote className="my-7 border-l-[3px] border-[#b56b3d] py-1 pl-[22px] font-[Georgia,serif] text-[24px] leading-[1.35]">
                “Understand the requirement, make it carefully, and stand behind
                the work.”
              </blockquote>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#b56b3d] px-7 py-3 text-[15px] font-bold text-white no-underline hover:bg-[#9c5d36] transition-colors"
              >
                Request a Quote or Sample
              </Link>
            </div>
            <ol className="relative pl-[34px] before:absolute before:bottom-2 before:left-2 before:top-[6px] before:w-px before:bg-[#bfc6c1] before:content-['']">
              <li className="relative pb-9 last:pb-0 before:absolute before:-left-[31px] before:top-[6px] before:h-3 before:w-3 before:rounded-full before:bg-[#b56b3d] before:shadow-[0_0_0_6px_#f6f3ed] before:content-['']">
                <div className="text-[12px] font-black uppercase tracking-[0.15em] text-[#b56b3d]">
                  2015
                </div>
                <h3 className="tracking-[-0.025em] font-bold mb-2 mt-[6px] text-[25px]">
                  Tuba Trims begins
                </h3>
                <p className="m-0 text-[14px] text-[#6b746f]">
                  Golam Kibria Chowdhury establishes Tuba Trims at Purana
                  Mugoltuli, Dhaka, with Tareq Chowdhury as Managing Director, to
                  manufacture belts and accessories for garment factories.
                </p>
              </li>
              <li className="relative pb-9 last:pb-0 before:absolute before:-left-[31px] before:top-[6px] before:h-3 before:w-3 before:rounded-full before:bg-[#b56b3d] before:shadow-[0_0_0_6px_#f6f3ed] before:content-['']">
                <div className="text-[12px] font-black uppercase tracking-[0.15em] text-[#b56b3d]">
                  Growth
                </div>
                <h3 className="tracking-[-0.025em] font-bold mb-2 mt-[6px] text-[25px]">
                  Focused fully on garment trims
                </h3>
                <p className="m-0 text-[14px] text-[#6b746f]">
                  Under Tareq&apos;s leadership the company commits entirely to trims
                  and expands into patches, badges, zipper pullers and buttons,
                  with in-house sample development.
                </p>
              </li>
              <li className="relative pb-9 last:pb-0 before:absolute before:-left-[31px] before:top-[6px] before:h-3 before:w-3 before:rounded-full before:bg-[#b56b3d] before:shadow-[0_0_0_6px_#f6f3ed] before:content-['']">
                <div className="text-[12px] font-black uppercase tracking-[0.15em] text-[#b56b3d]">
                  Today
                </div>
                <h3 className="tracking-[-0.025em] font-bold mb-2 mt-[6px] text-[25px]">
                  3,000 sq ft trims factory
                </h3>
                <p className="m-0 text-[14px] text-[#6b746f]">
                  25+ skilled people and 20+ machines handle cutting, stitching,
                  hardware fitting, branding and finishing for buyers and
                  garment factories.
                </p>
              </li>
              <li className="relative pb-9 last:pb-0 before:absolute before:-left-[31px] before:top-[6px] before:h-3 before:w-3 before:rounded-full before:bg-[#b56b3d] before:shadow-[0_0_0_6px_#f6f3ed] before:content-['']">
                <div className="text-[12px] font-black uppercase tracking-[0.15em] text-[#b56b3d]">
                  Next
                </div>
                <h3 className="tracking-[-0.025em] font-bold mb-2 mt-[6px] text-[25px]">
                  Growing with our customers
                </h3>
                <p className="m-0 text-[14px] text-[#6b746f]">
                  Continued investment in machinery and faster sampling so
                  buyers can develop and scale new trims with confidence.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f4f1e8]" id="leadership">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-[0.8fr_1.2fr] items-start gap-14 max-[900px]:grid-cols-1">
          <div>
            <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#b56b3d]">
              Leadership &amp; people
            </div>
            <h2 className="tracking-[-0.025em] font-bold mb-[0.83em] text-[54px] leading-[1.03]">
              A family-run factory with a 25-strong production team.
            </h2>
            <p className="mb-[1em] text-[#59645f]">
              Tuba Trims is a family-owned business led by its founder and
              managing director. Both are involved in the business every day,
              which means decisions on samples, materials and delivery dates are
              made quickly and by people who understand the work.
            </p>
            <p className="mb-[1em] text-[#59645f]">
              Behind them is a team of more than 25 cutters, machine operators,
              finishers and quality checkers, many of whom have been with the
              company for years and have built deep experience in leather, PU,
              webbing and metal-hardware trims.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[18px] max-[900px]:grid-cols-1">
            <article className="overflow-hidden rounded-[22px] border border-[#d8d3c8] bg-[#f6f3ed]">
              <div
                aria-hidden="true"
                className="grid h-[260px] place-items-center bg-[linear-gradient(135deg,#dfe5df,#f5efe5)]"
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
                <div className="text-[11px] font-black uppercase tracking-[0.12em] text-[#b56b3d]">
                  Founder
                </div>
                <h3 className="tracking-[-0.025em] font-bold my-1 text-[22px]">
                  Golam Kibria Chowdhury
                </h3>
                <p className="m-0 text-[13px] text-[#6b746f]">
                  Established Tuba Trims in 2015 and set the hands-on,
                  quality-first standard the factory still works to. Continues to
                  guide the company&apos;s long-term direction.
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[22px] border border-[#d8d3c8] bg-[#f6f3ed]">
              <div
                aria-hidden="true"
                className="grid h-[260px] place-items-center bg-[linear-gradient(135deg,#dfe5df,#f5efe5)]"
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
                <div className="text-[11px] font-black uppercase tracking-[0.12em] text-[#b56b3d]">
                  Managing Director
                </div>
                <h3 className="tracking-[-0.025em] font-bold my-1 text-[22px]">
                  Tareq Chowdhury
                </h3>
                <p className="m-0 text-[13px] text-[#6b746f]">
                  Leads the business day to day, including customer development,
                  sample approvals, production planning, quality and delivery. He
                  is the direct point of contact for buyers and garment
                  factories.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="mission">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div>
              <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#b56b3d]">
                Direction
              </div>
              <h2 className="my-[10px] text-[clamp(36px,4.5vw,58px)] leading-[1.04] tracking-[-0.025em] font-bold">
                Mission, vision and the principles we work by.
              </h2>
            </div>
            <div className="pt-7 text-[17px] text-[#59645f] max-[900px]:pt-0" />
          </div>
          <div className="grid grid-cols-2 gap-[18px] max-[900px]:grid-cols-1">
            <article className="rounded-3xl border border-[#d8d3c8] p-[34px]">
              <div className="text-[11px] font-black uppercase tracking-[0.14em] text-[#b56b3d]">
                Our mission
              </div>
              <p className="mb-[1em] text-[16px] text-[#59645f]">
                Give garment factories and brands one local partner for belts,
                patches, badges, zipper pullers and leather goods — with fast
                sample development, careful production and straight answers from
                requirement to delivery.
              </p>
            </article>
            <article className="rounded-3xl border border-[#d8d3c8] p-[34px]">
              <div className="text-[11px] font-black uppercase tracking-[0.14em] text-[#b56b3d]">
                Our vision
              </div>
              <p className="mb-[1em] text-[16px] text-[#59645f]">
                Grow from a trusted Dhaka workshop into a recognised regional
                manufacturer by investing in people, machinery and documented
                processes rather than shortcuts.
              </p>
            </article>
          </div>
          <ul className="mt-[18px] grid grid-cols-4 gap-[14px] max-[900px]:grid-cols-2 max-[580px]:grid-cols-1">
            <li className="min-h-[180px] rounded-[20px] bg-[#153a30] p-6 text-white">
              <span className="text-[12px] text-[#c7d5ce]">01</span>
              <b className="mt-10 block font-[Georgia,serif] text-[22px]">
                Quality before shortcuts
              </b>
            </li>
            <li className="min-h-[180px] rounded-[20px] bg-[#153a30] p-6 text-white">
              <span className="text-[12px] text-[#c7d5ce]">02</span>
              <b className="mt-10 block font-[Georgia,serif] text-[22px]">
                Clear, direct communication
              </b>
            </li>
            <li className="min-h-[180px] rounded-[20px] bg-[#153a30] p-6 text-white">
              <span className="text-[12px] text-[#c7d5ce]">03</span>
              <b className="mt-10 block font-[Georgia,serif] text-[22px]">
                Long-term partnerships
              </b>
            </li>
            <li className="min-h-[180px] rounded-[20px] bg-[#153a30] p-6 text-white">
              <span className="text-[12px] text-[#c7d5ce]">04</span>
              <b className="mt-10 block font-[Georgia,serif] text-[22px]">
                Continuous improvement
              </b>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-[#eef1ec]"
        id="company-profile"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-[0.95fr_1.05fr] gap-[60px] max-[900px]:grid-cols-1">
          <div>
            <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#b56b3d]">
              Company credentials
            </div>
            <h2 className="tracking-[-0.025em] font-bold mb-[0.83em] text-[50px] leading-[1.05]">
              Tuba Trims at a glance for sourcing teams.
            </h2>
            <p className="mb-[1em]">
              The essentials a merchandiser or sourcing manager needs when adding
              a new trims supplier: who we are, where we manufacture, what we make
              and who we serve.
            </p>
            <p className="mb-[1em] mt-4 text-[13px] text-[#66706b]">
              Need company documents, references or a factory visit before
              placing an order? Email{" "}
              <a href="mailto:info@tubatrims.com" className="underline">
                info@tubatrims.com
              </a>{" "}
              and we will respond within one working day.
            </p>
          </div>
          <dl className="overflow-hidden rounded-[22px] border border-[#cfd6d1] bg-[#f6f3ed]">
            {credentials.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[180px_1fr] border-b border-[#dfe4e0] last:border-b-0 max-[580px]:grid-cols-1"
              >
                <dt className="bg-[#f5f6f3] px-[18px] py-[15px] text-[12px] font-extrabold uppercase tracking-[0.07em] text-[#6b746f] max-[580px]:border-b max-[580px]:border-[#e3e5e0]">
                  {item.label}
                </dt>
                <dd className="px-[18px] py-[15px] text-[14px]">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
