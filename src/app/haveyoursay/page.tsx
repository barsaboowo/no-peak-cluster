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
				<h1 className="text-2xl font-bold">Have Your Say</h1>
				<Image
					className="dark:invert"
					src="/nopipeline.png"
					alt="Say No to the High Peak Cluster"
					width={500}
					height={500}
					priority
				/>

				<div className="w-full items-center max-w-2xl text-left gap-4">
					<ol className="list-inside list-decimal gap-4">
						<li>
							Sign the petition to pause Co2 storage projects: <a className="underline" href="https://petition.parliament.uk/petitions/739490" target="_blank" rel="noopener noreferrer">https://no-to-ccs.org.uk/petition/</a>
						</li>
						<li>
							You could ask your MP to take action on your concerns about this issue, including by asking them to present a public (paper) petition about this.  You can find contact details for your local MP here: <a className="underline" href="https://members.parliament.uk/FindYourMP" target="_blank" rel="noopener noreferrer">https://members.parliament.uk/FindYourMP</a>
						</li>
						<li>
							You can find out how to ask your MP to present a public (paper) petition here: <a className="underline" href="https://www.parliament.uk/get-involved/sign-a-petition/paper-petitions/" target="_blank" rel="noopener noreferrer">https://www.parliament.uk/get-involved/sign-a-petition/paper-petitions/</a>
						</li>
						<li>
							You could also raise your issue with a local councillor who represents you. You can use this page to find out who your local councillors are, and how to contact them: <a className="underline" href="https://www.gov.uk/find-your-local-councillors" target="_blank" rel="noopener noreferrer">https://www.gov.uk/find-your-local-councillors</a>
						</li>
					</ol>
				</div>
			</main>
		</div>
	);
}
