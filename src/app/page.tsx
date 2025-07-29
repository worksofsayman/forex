"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSkull, setShowSkull] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [initialContentOpacity, setInitialContentOpacity] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const prefetchRoutes = async () => {
      try {
        await Promise.all([
          router.prefetch("/home"),
          router.prefetch("/about"),
          router.prefetch("/collection"),
          router.prefetch("/blogs"),
          router.prefetch("/pricing")
        ]);
      } catch (error) {
        console.error("Prefetching failed:", error);
      }
    };
    prefetchRoutes();
  }, [router]);

  useEffect(() => {
    const initializeVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.error("Autoplay failed:", error);
        }
      }
      setShowSkull(true);
    };

    const timer = setTimeout(initializeVideo, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!zoomed) {
        setZoomed(true);
        setShowOverlay(true);
        
        const fadeOutInterval = setInterval(() => {
          setInitialContentOpacity(prev => {
            const newOpacity = prev - 0.02;
            if (newOpacity <= 0) {
              clearInterval(fadeOutInterval);
              return 0;
            }
            return newOpacity;
          });
        }, 20);

        const overlayInterval = setInterval(() => {
          setOverlayOpacity(prev => {
            const newOpacity = Math.min(prev + 0.02, 0.8);
            if (newOpacity >= 0.8) {
              clearInterval(overlayInterval);
              setTimeout(() => {
                setShowMap(true);
                const fadeOutOverlay = setInterval(() => {
                  setOverlayOpacity(prev => {
                    const newOpac = prev - 0.02;
                    if (newOpac <= 0) {
                      clearInterval(fadeOutOverlay);
                      setShowOverlay(false);
                      return 0;
                    }
                    return newOpac;
                  });
                }, 20);
              }, 800);
            }
            return newOpacity;
          });
        }, 20);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [zoomed]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    let resizeTimeout: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkMobile, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const pointerData = isMobile
    ? [
        { id: 1, top: "37%", left: "23%", image: "/pointer1.png", link: "/home" },
        { id: 2, top: "45%", left: "50%", image: "/pointer2.png", link: "/about" },
        { id: 3, top: "56%", left: "14%", image: "/pointer3.png", link: "/collection" },
        { id: 4, top: "52%", left: "69%", image: "/pointer4.png", link: "/blogs" },
        { id: 5, top: "60%", left: "55%", image: "/pointer5.png", link: "/pricing" },
      ]
    : [
        { id: 1, top: "17.5%", left: "30.5%", image: "/pointer1.png", link: "/home" },
        { id: 2, top: "35.5%", left: "39.5%", image: "/pointer2.png", link: "/about" },
        { id: 3, top: "57%", left: "29.5%", image: "/pointer3.png", link: "/collection" },
        { id: 4, top: "44.5%", left: "60%", image: "/pointer4.png", link: "/blogs" },
        { id: 5, top: "72%", left: "44%", image: "/pointer5.png", link: "/pricing" },
      ];

  const handleNavigation = (path: string) => {
    const buttons = document.querySelectorAll('[data-navigation]');
    buttons.forEach(btn => {
      btn.classList.add('pointer-events-none');
    });

    setTimeout(() => {
      requestAnimationFrame(() => {
        router.push(path);
      });
    }, 50);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        ref={videoRef}
        src="/video.mp4"
        poster="/poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div
        className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out origin-[60%_45%] z-10
          ${zoomed ? "scale-[2.5]" : "scale-100"}`}
        style={{ opacity: initialContentOpacity }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/first-image.png"
            alt="Glow Effect"
            width={2000}
            height={2000}
            className="object-contain mix-blend-screen opacity-80 animate-pulse-slow w-[800px] sm:w-[2000px]"
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/skull.png"
            alt="Skull Logo"
            width={150}
            height={150}
            className={`object-contain transition-all duration-[2000ms] ease-out translate-y-[-5%]
              sm:w-[400px] sm:h-[400px] w-[150px] h-[150px]
              ${showSkull ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            priority
          />
        </div>

        {!zoomed && (
          <div className="absolute bottom-10 w-full flex flex-col items-center animate-fade-up z-10">
            <p className="text-white text-lg sm:text-xl mb-2">Scroll to discover the map</p>
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1 animate-bounce">
              <div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </div>
        )}
      </div>

      {showOverlay && (
        <div
          className={`absolute inset-0 z-30 transition-opacity duration-1000 ease-out`}
          style={{
            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
            backdropFilter: `blur(${overlayOpacity * 10}px)`
          }}
        />
      )}

      {/* Map View */}
      {showMap && (
        <div className="absolute inset-0 z-40 flex items-center justify-center">
          <div className="relative w-full h-full max-w-[2000px] max-h-full">
            <Image
              src="/map.png"
              alt="Map"
              fill
              className="object-contain"
              priority
            />
            {pointerData.map((pointer) => (
              <div
                key={pointer.id}
                data-navigation="true"
                className="absolute z-50 flex flex-col items-center"
                style={{ 
                  top: pointer.top, 
                  left: pointer.left,
                  padding: '8px',
                  margin: '-8px',
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${pointer.id * 0.2}s`
                }}
                onClick={() => handleNavigation(pointer.link)}
              >
                <div className="relative flex flex-col items-center">
                  <Image
                    src={pointer.image}
                    alt={`Pointer ${pointer.id}`}
                    width={isMobile ? 50 : 70}
                    height={isMobile ? 50 : 100}
                    className="mb-1 cursor-pointer mix-blend-screen opacity-90"
                    priority
                  />
                  <div className={`border-white rotate-[-45deg] ${isMobile ? "w-2 h-2 border-[1px]" : "w-4 h-4 border-l-2 border-b-2"}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        [data-navigation] {
          cursor: pointer;
          transition: transform 0.3s;
        }
        [data-navigation]:hover {
          transform: scale(1.1);
        }
        [data-navigation]:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
}