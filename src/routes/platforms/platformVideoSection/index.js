import react from "react";
import "./platformVideoSection.scss"
export default function PlatformVideoSection(){
    return(
        <section>
            <div className="platformVideo-Section">
                <div className="container-xl">
                    <iframe src="https://www.youtube.com/embed/9Scs-J-MH0I?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=9Scs-J-MH0I&amp;playsinline=1" title="YouTube video player" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>
        </section>
    );
}