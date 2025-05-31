import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
function App() {
	return (
		<div className="bg-stone-950 text-3xl h-[100vh] w-[100vw] flex flex-col justify-center items-center space-y-3">
			<h1 className="text-white text-3xl">Hello baby 👋🏻</h1>
			<Button variant="outline" className="w-[100px]" onClick={() => toast("Portfolio is Cooking")}>
				Comming Soon...
			</Button>

			<Toaster />
		</div>
	);
}

export default App;
