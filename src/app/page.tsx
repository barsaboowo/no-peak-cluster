import Image from "next/image";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			
			<div className="flex gap-4 items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="/"
					target="_self"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Home
				</a>
				
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="/haveyoursay"
					target="_self"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					Have Your Say
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="/links"
					target="_self"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Links
				</a>
			
			</div>
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<Image
					className="dark:invert"
					src="/nocluster.webp"
					alt="Say No to the High Peak Cluster"
					width={500}
					height={500}
					priority
				/>

				<div className="w-full items-center max-w-2xl">
					<p className="text-justify">
						A major national infrastructure proposal known as the <a className="underline" href="https://peakcluster.org.uk/" target="_blank" rel="noopener noreferrer">High Peak Cluster</a> seeks to construct a 121-mile pipeline to transport pressurised carbon dioxide from industrial sites in the High Peak to storage beneath the seabed off the Wirral. The project is intended to capture emissions from cement production and reduce the industry’s carbon footprint, supported by significant public funding. As a nationally significant scheme, the final decision will be made at government level, though communities along the proposed route have raised serious concerns and are calling for formal opposition.
					</p>
					<br />
					<p className="text-justify">
						Key issues centre on safety, regulation, and the local environment. Carbon dioxide can accumulate in low-lying areas and become lethal at relatively low concentrations, as demonstrated by a <a className="underline" href="https://www.npr.org/2023/05/21/1172679786/carbon-capture-carbon-dioxide-pipeline" target="_blank" rel="noopener noreferrer">pipeline rupture in the United States</a> that led to widespread health impacts and emergency response failures. Similar risks are feared for communities situated along valleys and beneath the proposed route, including near schools and busy public areas. At the same time, national research into how carbon dioxide behaves in hilly terrain is still ongoing, with findings and potential regulations not expected until later in the decade.</p>
					<br />
					<p className="text-justify"> Critics argue that proceeding before this framework is complete leaves significant uncertainties unresolved. Concerns are further compounded by the region's known geological instability, including sinkholes and landslides, and the fact that the pipeline would pass beneath critical infrastructure such as roads, railways, rivers, and canals. Taken together, these factors underpin the view that the project should not move forward until safety, regulatory, and environmental risks are fully understood and addressed.
					</p>
				</div>
			</main>
		</div>
	);
}
