import Image from "next/image";

export default function Example() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              {/* Introducing */}
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              William Hansan
            </span>
            <span className="mt-2 block text-xl text-center leading-8 font-extrabold tracking-tight text-gray-500 sm:text-2xl">
              Private Equity | VC | M&A
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-800 leading-8">
            William Hansan is a boutique private equity and M&A advisory firm
            based in Seoul, Korea. We source small to midsize deals for
            strategic investors, help owners sell their business, and advise on
            raising capital for private companies. We also act as a financial
            investor in small to midsize deals in collaboration with SBK
            Partners.
          </p>
        </div>

        <div className="mt-12 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <hr />
          <h2 className="text-center">Profile</h2>
          <div className="text-center">
            <Image
              className="object-cover shadow-lg rounded-lg"
              src="/wonku_lee.jpeg"
              alt=""
              width="256"
              height="384"
            />
          </div>
          <p className="text-center text-gray-900 font-bold">
            <div>William Lee, CFA CPA CBV ABV MST</div>
            <div>
              <a href="mailto:wonkulee@gmail.com">wonkulee@gmail.com</a>{" "}
              <a
                href="https://www.linkedin.com/in/william-wonku-lee"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-500 inline-block"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </p>

          <ul role="list">
            <li>CEO, William Hansan</li>
            <li>Director, SBK Partners</li>
            <li>Director, Milestone Accounting Firm</li>
          </ul>
          <p>
            William is a private equity and M&A professional with experiences in
            private equity, corporate M&A department, and M&A advisory firms in
            Korea and North America
          </p>
          <p>
            William has a significant amount of experience in private equity,
            M&A and valuation, having advised and/or executed more than 100 M&A
            transactions throughout his career. He is also experienced in audit,
            IFRS & US GAAP and internal control advisory engagements and has
            technical knowledge and experience in Korea, US, and Canada tax
            matters. ​​
          </p>
          <p>
            William holds Chartered Professional Accountant (Canada), Certified
            Public Accountant (US), Chartered Financial Analyst, Chartered
            Business Valuator, and Accredited in Business Valuation (US)
            designations. He is a graduate of Mathematics/Chartered Accountancy
            and Master of Accountancy programs from the University of Waterloo
            and the Master of Science in Taxation program from the University of
            Seoul specializing in international taxation.​
          </p>
          <h2 className="text-center">Professional Designations</h2>
          <ul role="list">
            <li>Certified Public Accountant (U.S. Illinois)</li>
            <li>
              Chartered Professional Accountant, Chartered Accountant (Canada)
            </li>
            <li>Chartered Financial Analyst (CFA Institute)</li>
            <li>Accredited in Business Valuation (AICPA)</li>
            <li>Chartered Business Valuator (CBV Institute)</li>
          </ul>
          <h2 className="text-center">Education</h2>
          <ul role="list">
            <li>
              Master of Science in Taxation (International Tax), University of
              Seoul
            </li>
            <li>Master of Accounting (MAcc), University of Waterloo</li>
            <li>
              Honours Bachelor of Mathematics / Chartered Accountancy Studies
              Co-op (BMath), University of Waterloo
            </li>
          </ul>
          <h2 className="text-center">Selected M&A advisory experiences</h2>
          <ul role="list">
            <li>
              Samsung Electronics{"'"} acquisitions of Yesco Electronics (US),
              Quietside (US), PrinterOn (Canada) (Financial DD, valuation,
              structuring, SPA & negotiation support)
            </li>
            <li>
              National Pension Service{"'"}s investment in the 7th largest cable
              operator based in the United States, an industrial product
              distributor in France, and a French distributor specialized in
              industrial products (Transaction Advisory)
            </li>
            <li>
              Blackstone{"'"}s investment in Simone, a handbag OEM company based
              in Korea (Financial DD)
            </li>
            <li>
              Temasek{"'"}s investment in Celltrion Healthcare, a biosimilar
              company based in Korea (Financial DD)
            </li>
            <li>
              Disney{"'"}s acquisition of an online game development company
              (Financial DD)
            </li>
            <li>
              Doosan{"'"}s proposed acquisition of Ansaldo Energia S.p.A based
              on Italy (Financial DD) and acquisition of a water/wastewater
              treatment engineering company based in U.K. (Financial DD &
              valuation)
            </li>
            <li>
              Kolmar{"'"}s acquisition of CSR Cosmetics Solution, a Canadian
              cosmetics OEM company (SPA & negotiation support)
            </li>
            <li>
              POSCO{"'"}s proposed investment in a lithium battery company
              (Valuation)
            </li>
            <li>
              Korea Electric Power Corp{"'"}s acquisition of 4th largest coal
              producer in Indonesia (Financial DD)
            </li>
            <li>
              Divestiture of Vaunce Co., Ltd., an indoor trampoline park company
              based in Korea (Sell side advisory)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/*
<p>
            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong>{" "}
            sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet
            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus
            risus viverra tellus varius sit neque erat velit. Faucibus commodo
            massa rhoncus, volutpat. Dignissim sed eget risus enim.{" "}
            <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
          </p>
          <ul role="list">
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>
              Cras cras lobortis vitae vivamus ultricies facilisis tempus.
            </li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>
            Quis semper vulputate aliquam venenatis egestas sagittis quisque
            orci. Donec commodo sit viverra aliquam porttitor ultrices gravida
            eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet,
            mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed
            elit interdum dignissim.
          </p>
          <h2>From beginner to expert in 30 days</h2>
          <p>
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
            in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum
            mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
            tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
            Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
            diam.
          </p>
          <blockquote>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
              urna sed consectetur neque tristique pellentesque. Blandit amet,
              sed aenean erat arcu morbi.
            </p>
          </blockquote>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit.
          </p>
          <figure>
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure>
          <h2>Everything you need to get up and running</h2>
          <p>
            Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>.
            Amet, massa quam varius orci dapibus volutpat cras. In amet eu
            ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
            viverra ridiculus non molestie. Gravida quis fringilla amet eget dui
            tempor dignissim. Facilisis auctor venenatis varius nunc, congue
            erat ac. Cras fermentum convallis quam.
          </p>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit.
          </p>
          */
