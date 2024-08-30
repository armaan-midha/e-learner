import * as React from "react"

import { cn } from "../lib/utils"
import { Button } from "./Button"

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-xl border bg-card text-card-foreground shadow",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn("font-semibold leading-none tracking-tight", className)}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { expandable?: boolean }
>(({ className, expandable = false, children, ...props }, ref) => {
    const [expanded, setExpanded] = React.useState(false);
    const [contentOverflow, setContentOverflow] = React.useState(false);
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (contentRef.current) {
            const isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;
            setContentOverflow(isOverflowing);
        }
    }, [children]);

    return (
        <div ref={ref} className={cn("p-6 pt-0", className)} {...props}>
            <div
                ref={contentRef}
                className={cn(
                    "flex flex-col items-center justify-center overflow-hidden transition-all duration-300", 
                    expanded ? "max-h-none" : "max-h-48" // Set to 4 lines height (approx 5rem = 80px)
                )}
                style={{ display: '-webkit-box', WebkitLineClamp: expanded ? 'unset' : '4', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
            >
                {React.Children.map(children, (child) =>
                    React.isValidElement(child) ? (
                        <div className="flex flex-col items-center justify-center">
                            {child}
                        </div>
                    ) : (
                        child
                    )
                )}
            </div>
            {expandable && contentOverflow && (
                <Button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-2 text-sm text-primary-foreground bg-primary"
                >
                    {expanded ? "Read Less" : "Read More"}
                </Button>
            )}
        </div>
    );
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
