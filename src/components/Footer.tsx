import { Atom, Code, Coffee, GithubLogo, InstagramLogo } from "phosphor-react";

export function Footer(){
    return (
        <footer className="pt-16 ">
                <div className="px-2 py-2 border-t flex justify-between border-gray-600">
                    <div>Create by Giovani</div>
                    <GithubLogo size={20}/>
                    <InstagramLogo size={20} />
                    <Atom size={20} />
                    <Coffee size={20} />
                    <Code size={20} />
                 </div>
        </footer>
    )
}