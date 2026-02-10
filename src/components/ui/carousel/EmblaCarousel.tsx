import React, { useCallback, useEffect, useRef } from 'react'
import type {
    EmblaCarouselType,
    EmblaEventType,
    EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import './embla.css'

const TWEEN_FACTOR_BASE = 0.8

type PropType = {
    slides: React.ReactNode[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const tweenFactor = useRef(0)
    const tweenNodes = useRef<HTMLElement[]>([])

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__slide__inner') as HTMLElement
        })
    }, [])

    const setTweenFactor = useCallback((_emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE
    }, [])

    const tweenFocus = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine()
            const scrollProgress = emblaApi.scrollProgress()
            const slidesInView = emblaApi.slidesInView()
            const isScrollEvent = eventName === 'scroll'

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress
                const slidesInSnap = engine.slideRegistry[snapIndex]

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopPoint) => {
                            const target = loopPoint.target()

                            if (slideIndex === loopPoint.index && target !== 0) {
                                const sign = Math.sign(target)

                                if (sign === -1) {
                                    diffToTarget = scrollSnap - (1 + scrollProgress)
                                }
                                if (sign === 1) {
                                    diffToTarget = scrollSnap + (1 - scrollProgress)
                                }
                            }
                        })
                    }

                    const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                    const opacity = Math.min(Math.max(tweenValue, 0.3), 1).toString()
                    const scale = Math.min(Math.max(tweenValue, 0.85), 1).toString()
                    const blur = (8 * (1 - Math.min(Math.max(tweenValue, 0), 1))).toFixed(2)
                    const targetNode = tweenNodes.current[slideIndex]
                    if (targetNode) {
                        targetNode.style.opacity = opacity
                        targetNode.style.transform = `scale(${scale})`
                        targetNode.style.filter = `blur(${blur}px)`
                    }
                })
            })
        },
        []
    )

    useEffect(() => {
        if (!emblaApi) return

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenFocus(emblaApi)

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenFocus)
            .on('scroll', tweenFocus)
            .on('slideFocus', tweenFocus)
    }, [emblaApi, tweenFocus, setTweenFactor, setTweenNodes])

    return (
        <div className="embla relative">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__inner">
                                {slide}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Side Fades - White gradients to blend slides at the edges */}
            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none hidden md:block" />
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none hidden md:block" />

            <div className="embla__controls absolute top-1/2 -translate-y-1/2 -left-4 -right-4 lg:-left-16 lg:-right-16 pointer-events-none flex justify-between z-30">
                <div className="embla__buttons pointer-events-auto">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                </div>
                <div className="embla__buttons pointer-events-auto">
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
