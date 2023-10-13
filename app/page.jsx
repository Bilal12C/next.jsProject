import Feed from "../components/Feed"

function Home() {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Discover and Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">AI-Powered Prompts </span>
            </h1>
            <p className="desc text-center">
                Prompthpia is an open Source AI prompting tool for modern world to discover , create and Share creative Prompts
            </p>
            <Feed/>
        </section>
    )
}

export default Home