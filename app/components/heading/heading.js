"use client";

import Image from "next/image"

import { HeaderWrapper } from "./heading.styles"

const Heading = () => {
    return (
        <HeaderWrapper>
            <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={350}
                height={133}
                priority
            />
        </HeaderWrapper>
    );
}

export default Heading;