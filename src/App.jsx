import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import confetti from "canvas-confetti";

function App() {
	const handleClick = () => {
		const duration = 5 * 1000;
		const animationEnd = Date.now() + duration;
		const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

		const randomInRange = (min, max) => Math.random() * (max - min) + min;

		const interval = window.setInterval(() => {
			const timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(interval);
			}

			const particleCount = 50 * (timeLeft / duration);
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
			});
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
			});
		}, 250);
	};

	return (
		<div className="bg-stone-950 text-3xl h-[100vh] w-[100vw] p-8 relative">
			<div className="w-full">
				<h1 className="text-white text-center text-5xl pt-10">Hey There {<HiAnimation />}</h1>
			</div>
			<div className=" h-[calc(100vh-20vh)] gap-5 flex flex-col justify-center items-center space-y-3">
				<p className="text-white text-center">Welcome to Urmish's site</p>
				<div className="flex flex-col items-center gap-4">
					<div className="flex gap-3">
						<Button
							className="toast-button"
							variant="outline"
							onClick={() => {
								const myPromise = new Promise((resolve) => {
									setTimeout(() => {
										resolve({ status: "Coming Soon" });
									}, 3000);
								});

								toast.promise(myPromise, {
									loading: "Loading project status...",
									success: (data) => {
										return `Project status : ${data.status}`;
									},
									error: "Error",
								});
							}}
						>
							Check Project Status
						</Button>
						<Button className="border-2 border-white/50" onClick={handleClick}>
							🎉
						</Button>
					</div>
					<p className="text-stone-500 text-sm absolute bottom-5">© Urmish Ramani , {new Date().getFullYear()}</p>
				</div>

				<Toaster position="bottom-center" />
			</div>
		</div>
	);
}

export default App;

function HiAnimation() {
	return <span className="animate-hii inline-block">👋🏻</span>;
}
