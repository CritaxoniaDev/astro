'use client';

import { FC, useCallback, useState } from 'react';
import { Button } from './ui/button';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { motion, AnimatePresence } from 'framer-motion';

const StarryMainPage: FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="relative min-h-screen bg-black flex flex-col items-center justify-center text-white overflow-hidden">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "#000011",
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        move: {
                            enable: true,
                            speed: 0.1,
                            direction: "none",
                            random: true,
                            straight: false,
                            outModes: {
                                default: "out"
                            },
                        },
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                area: 800
                            }
                        },
                        opacity: {
                            value: 1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                        twinkle: {
                            particles: {
                                enable: true,
                                frequency: 0.05,
                                opacity: 1,
                            },
                        },
                    },
                    preset: "stars",
                    polygon: {
                        enable: true,
                        type: "inline",
                        move: {
                            radius: 10,
                            type: "path",
                            path: {
                                enable: true,
                                options: {
                                    size: 100,
                                    path: "M 50 0 L 63 38 L 100 38 L 72 59 L 82 95 L 50 75 L 18 95 L 28 59 L 0 38 L 37 38 Z"
                                }
                            }
                        },
                        inline: {
                            arrangement: "one-per-point"
                        },
                        draw: {
                            enable: true,
                            stroke: {
                                color: "rgba(255, 255, 255, 0.2)",
                                width: 1,
                                opacity: 1
                            }
                        },
                        scale: 1,
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab"
                            }
                        },
                        modes: {
                            grab: {
                                distance: 200,
                                links: {
                                    opacity: 1
                                }
                            }
                        }
                    },
                    emitters: [
                        {
                            direction: "top-right",
                            rate: {
                                delay: 10,
                                quantity: 1
                            },
                            position: {
                                x: 0,
                                y: 100
                            },
                            size: {
                                width: 0,
                                height: 0
                            },
                            particles: {
                                shape: {
                                    type: "circle"
                                },
                                size: {
                                    value: { min: 1, max: 3 }
                                },
                                move: {
                                    straight: true,
                                    speed: 15
                                },
                                opacity: {
                                    value: 1
                                },
                                trail: {
                                    enable: true,
                                    length: 20,
                                    fillColor: "#000011"
                                }
                            }
                        },
                        {
                            direction: "top-left",
                            rate: {
                                delay: 15,
                                quantity: 1
                            },
                            position: {
                                x: 100,
                                y: 100
                            },
                            size: {
                                width: 0,
                                height: 0
                            },
                            particles: {
                                shape: {
                                    type: "circle"
                                },
                                size: {
                                    value: { min: 1, max: 3 }
                                },
                                move: {
                                    straight: true,
                                    speed: 15
                                },
                                opacity: {
                                    value: 1
                                },
                                trail: {
                                    enable: true,
                                    length: 20,
                                    fillColor: "#000011"
                                }
                            }
                        }
                    ]
                }}
                className="absolute inset-0 z-0"
            />
            <motion.div
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <motion.h1
                    className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl mb-12 text-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    {["Explore", "the", "Wonders", "of", "the", "Cosmos"].map((word, index) => (
                        <motion.span
                            key={index}
                            className="inline-block mr-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"
                            style={{
                                textShadow: '0 0 15px rgba(138, 43, 226, 0.7), 0 0 25px rgba(75, 0, 130, 0.5)',
                                WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                                perspective: '1000px',
                                filter: 'drop-shadow(0 0 10px rgba(148, 0, 211, 0.4))'
                            }}
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, index % 2 === 0 ? 5 : -5, 0],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 3 + index * 0.2,
                                ease: "easeInOut",
                                times: [0, 0.5, 1],
                                repeat: Infinity,
                                repeatDelay: 0.2
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p
                    className="text-2xl mb-8 text-center max-w-3xl leading-relaxed font-starry"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    style={{
                        background: 'linear-gradient(to right, #ffffff, #87CEFA)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 5px rgba(135, 206, 250, 0.7)',
                        fontFamily: "'Orbitron', sans-serif",
                        letterSpacing: '1px'
                    }}
                >
                    Embark on a journey through the stars and discover the mysteries of the universe.
                </motion.p>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-gray-300 border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl rounded-full px-8 py-3 font-bold tracking-wide"
                    >
                        Start Your Cosmic Adventure
                    </Button>
                </motion.div>
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-full mt-4 text-sm text-center"
                        >
                            Your journey awaits...
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default StarryMainPage;