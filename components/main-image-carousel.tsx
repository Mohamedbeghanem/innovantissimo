"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/image00001.jpeg",
  "/image00002.jpeg",
  "/image00003.jpeg",
  "/image00004.jpeg",
  "/image00005.jpeg",
  "/image00006.jpeg",
  "/image00007.jpeg",
  "/image00008.jpeg",
  "/image00009.jpeg",
  "/image00010.jpeg",
  "/image00011.jpeg",
  "/image00012.jpeg",
  "/image00013.jpeg",
  "/image00014.jpeg",
  "/image00015.jpeg",
  "/image00016.jpeg",
  "/image00017.jpeg",
  "/image00018.jpeg",
  "/placeholder-0rbi0.png",
  "/placeholder-diwq6.png",
  "/placeholder-kk841.png",
];

export function MainImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-lg"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image
                    src={src}
                    alt={`Product image ${index + 1}`}
                    fill
                    className="rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
