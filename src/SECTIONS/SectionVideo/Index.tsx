

export default function SectionVideo() {
    return (
        <section className="w-full mt-5 py-10 md:py-14 xl:py-20 px-5 md:px-[5%] flex flex-col lg:flex-row lg:gap-4 xl:gap-16 items-center " data-aos="fade-up" data-aos-duration="1500">
            
            <div className="w-full lg:w-full flex flex-col items-center mt-8">
                <h1 className="max-w-[570px] text-4xl md:text-6xl font-bold mb-16 text-center">
                    Assista ao video e entenda mais:
                </h1>
                <div className="w-full lg:w-[1000px] lg:min-h-600px] flex justify-center items-center video " data-aos="flip-right" data-aos-duration="1500" data-aos-delay="100">
                    <iframe className="w-full  h-[180px] md:h-[500px] lg:h-[600px] rounded-xl" src="https://www.youtube.com/embed/ZfpNDONAvT0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            
        </section>
    )
}