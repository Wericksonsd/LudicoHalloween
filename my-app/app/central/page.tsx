import Header from "./components/header";
import Footer from "./components/footer";

export default function Central () {

    return(
        <div className="flex-1 w-full flex flex-col items-center justify-center bg-zinc-800">
            <Header/>
            <main className="flex-1">
                b
            </main>
            <Footer/>
        </div>
    )
}