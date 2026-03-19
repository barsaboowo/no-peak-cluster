import Image from "next/image";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
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
				<h1 className="text-2xl font-bold">Links to Other Resources</h1>

				<div className="w-full items-center max-w-2xl text-left gap-4">
					<ol className="list-inside list-decimal">
						<li>
							<a className="underline" href="https://petition.parliament.uk/petitions/739490" target="_blank" rel="noopener noreferrer">Sign the petition to pause Co2 storage projects</a>
						</li>
						<li>
							<a className="underline" href="https://peakcluster.org.uk/" target="_blank" rel="noopener noreferrer">https://peakcluster.co.uk/</a>
						</li>
						<li>
							Stop CCS: <a className="underline" href="https://no-to-ccs.org.uk/" target="_blank" rel="noopener noreferrer">https://stopccs.uk/</a>
						</li>
						<li>
							Find your local councillors: <a className="underline" href="https://www.gov.uk/find-your-local-councillors" target="_blank" rel="noopener noreferrer">https://www.gov.uk/find-your-local-councillors</a>
						</li>
						<li>
							Find your local MP: <a className="underline" href="https://members.parliament.uk/FindYourMP" target="_blank" rel="noopener noreferrer">https://members.parliament.uk/FindYourMP</a>
						</li>
						<li>
							<a className="underline" href="https://www.facebook.com/groups/1876124316623662/" target="_blank" rel="noopener noreferrer">High Peak Cluster Facebook group</a>
						</li>
						<li>
							<a className="underline" href="https://www.facebook.com/groups/1694333114865118/" target="_blank" rel="noopener noreferrer">High Peak Cluster Cheshire East Facebook group</a>
						</li>
						<li>
							<a className="underline" href="https://www.facebook.com/groups/3825522821076371" target="_blank" rel="noopener noreferrer">Peak Cluster Cheshire Info</a>
						</li>
						<li>
							<a className="underline" href="https://www.itv.com/news/granada/2026-03-06/what-is-the-peak-cluster-project-and-why-are-locals-so-concerned" target="_blank" rel="noopener noreferrer">ITV News article about the High Peak Cluster</a>
						</li>
					</ol>
				</div>
			</main>

		</div>
	);
}
