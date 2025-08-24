import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Simple utility to combine class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Simple Button component for carousel navigation
function CarouselButton({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "absolute z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef(({ 
  className, 
  children, 
  opts = {}, 
  ...props 
}, ref) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [itemsToShow, setItemsToShow] = React.useState(1)
  
  // Calculate how many items to show based on screen size
  React.useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3) // lg: show 3 items
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2) // md: show 2 items
      } else {
        setItemsToShow(1) // mobile: show 1 item
      }
    }
    
    updateItemsToShow()
    window.addEventListener('resize', updateItemsToShow)
    return () => window.removeEventListener('resize', updateItemsToShow)
  }, [])

  const items = React.Children.toArray(children?.props?.children || [])
  const totalItems = items.length
  const maxIndex = Math.max(0, totalItems - itemsToShow)

  const canScrollPrev = currentIndex > 0
  const canScrollNext = currentIndex < maxIndex

  const scrollToPrevious = () => {
    if (canScrollPrev) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const scrollToNext = () => {
    if (canScrollNext) {
      setCurrentIndex(prev => prev + 1)
    } else if (opts.loop) {
      setCurrentIndex(0)
    }
  }

  const contextValue = {
    currentIndex,
    totalItems,
    canScrollPrev,
    canScrollNext,
    scrollToPrevious,
    scrollToNext,
    itemsToShow
  }

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { currentIndex, itemsToShow } = useCarousel()
  
  return (
    <div className="overflow-hidden" ref={ref} {...props}>
      <div 
        className={cn("flex transition-transform duration-300 ease-in-out", className)}
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
        }}
      >
        {children}
      </div>
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, children, ...props }, ref) => {
  const { itemsToShow } = useCarousel()
  
  return (
    <div
      ref={ref}
      className={cn("flex-none", className)}
      style={{ width: `${100 / itemsToShow}%` }}
      {...props}
    >
      {children}
    </div>
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => {
  const { canScrollPrev, scrollToPrevious } = useCarousel()
  
  return (
    <CarouselButton
      ref={ref}
      className={cn("left-4 top-1/2 -translate-y-1/2", className)}
      disabled={!canScrollPrev}
      onClick={scrollToPrevious}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </CarouselButton>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
  const { canScrollNext, scrollToNext } = useCarousel()
  
  return (
    <CarouselButton
      ref={ref}
      className={cn("right-4 top-1/2 -translate-y-1/2", className)}
      disabled={!canScrollNext}
      onClick={scrollToNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </CarouselButton>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
