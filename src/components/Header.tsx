import React, { useState } from "react";
import { Button } from "./Button";
import placeholder from "../resources/placeholder.png"

function Header() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
            <div className="container">
                <div className="grid gap-6 md:grid-cols-2 items-center">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Unlock the World with Our Language Services
                        </h1>
                        <div className={`relative ${isExpanded ? "" : "max-h-36 overflow-hidden"}`}>
                            <p className="max-w-[600px] text-lg text-primary-foreground">
                                Studying abroad is a dream of many but sometimes many students lack it because of language. If you are also worried about language and don't know what to do. we got your back, we are offering language services specially for those individuals who want to study abroad. Language plays a crucial role in every aspect of life. And if you want to study out of your country then language will help you to connect people. Thats its suggested to all candidates who want to go abroad to learn the native language of that particular country and by any reason you can't learn the native language then at least your english should be fluent. So, here we are offering the language in services in different fields, for example Academic IELTS,General IELTS,General PTE , PTE Core and Duolingo. These services improve your language skills so that you won't have any difficulty communicating with people from across the world.
                            </p>
                            {!isExpanded && (
                                <div className="absolute bottom-0 left-0 w-full h-8"></div>
                            )}
                        </div>
                        <Button
                            onClick={toggleExpand}
                            className="mt-2 text-primary bg-primary-foreground font-medium"
                        >
                            {isExpanded ? "Read Less" : "Read More"}
                        </Button>
                    </div>
                    <div className="flex justify-end">
                        <img
                            src={placeholder}
                            width="500"
                            height="400"
                            alt="Language Services"
                            className="max-w-full h-auto rounded-lg"
                            style={{ aspectRatio: "500/400", objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
